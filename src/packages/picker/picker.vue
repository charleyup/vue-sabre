<template>
    <transition name="mtMove">
        <div class="mt-picker" v-show="visible">
            <div class="mt-picker__title">
                {{title}}
                <i @click.self="onCancel" class="iconfont icon-popup-close"></i>
            </div>
            <div class="mt-picker__wrapper">
                <div class="top-border"></div>
                <div class="bottom-border"></div>
                <div ref="wheelWrapper" class="mt-picker__wheelwrap">
                    <div class="wheel" v-for="(items, index) in pickerData" :key="index">
                        <ul class="wheel-scroll">
                            <li v-for="(item, idx) in items" :key="idx"  class="wheel-item">{{item.label}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <mt-button size="low" @click.self="onConfirm">确&ensp;认</mt-button>
        </div>
    </transition>
</template>
<script>
import BScroll from "better-scroll";
import { febDays } from "@/utils/formatDate";
export default {
    name: "mt-picker",
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "default",
            validator: (val) => {
                return ["default", "time", "year", "month"].indexOf(val) !== -1;
            }
        },
        data: {
            type: Array,
            default () {
                return [];
            }
        },
        // 每一列的select的index初始化
        index: {
            type: Array,
            default() {
                return [];
            }
        },
        title: {
            type: String,
            default: "日期"
        }
    },
    data() {
        return {
            pickerData: this.data.slice(),
            selectIndex: this.index,
            pickerSelectedVal: [],
            pickerSelectedText: [],
            yearIndex: this.index[0],
            monthIndex: 0
        };
    },
    watch: {
        visible (val) {
            if (val) {
                // 如果wheels不存在
                if (!this.wheels || this.dirty) {
                    if (!this.initWheel()) {
                        return;
                    }
                } else {
                    // 重新打开时 enable 每一个wheel 并且滚动到上次位置
                    for (let i = 0; i < this.pickerData.length; i++) {
                        this.wheels[i].enable();
                        this.wheels[i].wheelTo(this.selectIndex[i]);
                    }
                }
            } else {
                // 禁用bscroll
                for (let i = 0; i < this.pickerData.length; i++) {
                    this.wheels[i].disable();
                }
            }
        },
        // 年份改变天数
        yearIndex () {
            this.onChangeDays();
        },
        // 月份改变天数
        monthIndex () {
            this.onChangeDays();
        }
    },
    methods: {
        // 年份 月份改变天数
        onChangeDays () {
            const year = this.pickerData[0][this.yearIndex].value;
            const days = [31, febDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            this.pickerData[2] = [];
            for (let i = 1; i <= days[this.monthIndex]; i++) {
                this.pickerData[2].push({
                    label: i + "日",
                    value: i < 10 ? "0" + i : "" + i
                });
            }
            this.setData(this.pickerData);
        },
        // 取消
        onCancel() {
            this.$emit("update:visible", false);
        },
        // 确定
        onConfirm () {
            if (!this._canConfirm()) {
                return;
            }
            for (let i = 0; i < this.pickerData.length; i++) {
                // 获取当前选中的索引值。
                const index = this.wheels[i].getSelectedIndex();
                this.selectIndex[i] = index;
                let value = null;
                if (this.pickerData[i].length) {
                    value = this.pickerData[i][index].value;
                }
                this.pickerSelectedVal[i] = value;
                this.pickerSelectedText[i] = this.pickerData[i][index].label;
            }
            console.log("confirm", this.pickerSelectedText);
            this.$emit("confirm", this.pickerSelectedText);
            this.$emit("update:visible", false);
        },
        // 填入数据
        setData(data) {
            this.pickerData = data.slice();
            this.dirty = true;
        },
        // 给每一列初始化Bscroll
        _createWheel(wheelWrapper, i = 0) {
            // 如果不存在 new Bs
            if (!this.wheels[i]) {
                this.wheels[i] = new BScroll(wheelWrapper.children[i], {
                    wheel: {
                        selectedIndex: this.selectIndex[i],
                        rotate: 0
                    },
                    probeType: 3
                });
                // 月份滚动结束 对应日期初始化
                // if (i === 1) {
                if (this.type === "time" && i < 2) {
                    this.wheels[i].on("scrollEnd", () => {
                        this.yearIndex = this.wheels[0].getSelectedIndex();
                        this.monthIndex = this.wheels[1].getSelectedIndex();
                    });
                }
                // }
            } else {
                this.wheels[i].refresh();
            }
            return this.wheels[i];
        },
        // 判断当前scroll是否处于滚动动画过程中
        _canConfirm() {
            return this.wheels.every(wheel => {
                return !wheel.isInTransition;
            });
        },
        // 初始化 picker 所选项
        initSelectIndex () {
            if (!this.index.length) {
                this.selectIndex = [];
                if (this.type === "default") {
                    for (let i = 0; i < this.pickerData.length; i++) {
                        // 每一列都初始化0
                        this.selectIndex[i] = 0;
                    }
                } else if (this.type === "time") {
                    this.selectIndex = [0,0,0,0,0];
                } else {
                    this.selectIndex = [0];
                }
            }
        },
        // 初始化 picker
        initWheel () {
            const wheelWrapper = this.$refs.wheelWrapper;
            this.wheels = [];
            if (this.type === "default") {
                this.$nextTick(() => {
                    for (let i = 0; i < this.pickerData.length; i++) {
                        this._createWheel(wheelWrapper, i);
                    }
                });
            } else if (this.type === "time") {
                this.pickerData = [[],[],[],[],[]];
                const year = new Date().getFullYear() + 5;
                for(let i = 1970; i <= year; i++) {
                    this.pickerData[0].push({
                        label: `${i}年`,
                        value: i
                    });
                }
                for (let i = 1; i <= 12; i++) {
                    this.pickerData[1].push({
                        label: `${i}月`,
                        value: i
                    });
                }
                for (let i = 1; i <= 31; i++) {
                    this.pickerData[2].push({
                        label: `${i}日`,
                        value: i
                    });
                }
                for (let i = 0; i <= 23; i++) {
                    this.pickerData[3].push({
                        label: `${i}时`,
                        value: i
                    });
                }
                for (let i = 0; i <= 59; i++) {
                    this.pickerData[4].push({
                        label: `${i}分`,
                        value: i
                    });
                }
                this.$nextTick(() => {
                    for (let i = 0; i < this.pickerData.length; i++) {
                        this._createWheel(wheelWrapper, i);
                    }
                });
            } else if (this.type === "year") {
                this.pickerData = [[]];
                const year = new Date().getFullYear() + 5;
                for(let i = 1970; i <= year; i++) {
                    this.pickerData[0].push({
                        label: `${i}年`,
                        value: i
                    });
                }
                this.$nextTick(() => {
                    this._createWheel(wheelWrapper);
                });
            } else if (this.type === "month") {
                this.pickerData = [[]];
                for (let i = 1; i <= 12; i++) {
                    this.pickerData[0].push({
                        label: `${i}月`,
                        value: i
                    });
                }
                this.$nextTick(() => {
                    this._createWheel(wheelWrapper);
                });
            } else {
                // 传参错误
                this.dirty = true;
                console.log("picker props type 传参错误!");
                this.$emit("update:visible", false);
                return false;
            }
            this.dirty = false;
            return true;
        }
    },
    created() {
        this.initSelectIndex();
    }
};
</script>
