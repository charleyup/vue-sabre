<template>
    <div class="mt-tabs">
        <div class="mt-tabs-box">
            <ul class="mt-tabs-nav">
                <li
                    class="mt-tabs-item"
                    v-for="(item, index) in list"
                    :key="index"
                    :class="item.value === tabValue ? 'mt-tabs-active' : ''"
                    @click="handleTabClick(item.value)">
                    <a href="javascript:">{{item.label}}</a>
                </li>
            </ul>
            <div ref="tabsline" class="mt-tabs-line" v-show="lineShow"></div>
        </div>
        <div class="mt-tabs-panel">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: "mt-tabs",
        props: {
            value: {
                // 当前激活tab的value
                type: [String, Number], default: ""
            },
            horizontalScroll: {
                // 是否可以横向滚动
                type: Boolean, default: false
            }
        },
        data() {
            return {
                tabValue: this.value,
                list: [], // 选项卡数据列表
                activeIndex: 0, // 当前激活项序号
                lineShow: false // 下标线是否显示
            }
        },
        computed:{
        },
        watch: {
            value (val) {
                const tabPanels = this.$children.filter((item) => item.$options._componentTag === "mt-tabs-panel");
                const isExistValue = tabPanels.some((item) => {
                    return item.value === val;
                });
                if (!isExistValue && tabPanels.length) {
                    // 传入的value找不到与之对应的value，默认选择第一个选项卡唤醒
                    val = tabPanels[0].value;
                }

                //触发handleTabClick方法
                this.handleTabClick(val);
            }
        },
        methods:{
            // 初始化组件
            init () {
                this.list = []; // 重置选项卡数据

                const tabPanels = this.$children.filter((item) => item.$options._componentTag === "mt-tabs-panel");
                tabPanels.forEach((item, index) => {
                    this.list.push({ label: item.label, value:item.value });
                    if (item.value === this.tabValue) this.activeIndex = index;
                });

                this.changeLine();
            },
            // 改变选中的选项卡
            handleTabClick (val) {
                const tabPanels = this.$children.filter((item) => item.$options._componentTag === "mt-tabs-panel");

                // 改变外部绑定value、activeIndex
                if (this.tabValue !== val) {
                    this.tabValue = val;
                    tabPanels.forEach((item, index) => {
                        if (item.value === val) {
                            this.$emit("tab-click", item);
                            this.activeIndex = index;
                        }
                    });
                }
                this.changeLine();
            },
            // 改变下标线位置
            changeLine () {
                const tabPanels = this.$children.filter((item) => item.$options._componentTag === "mt-tabs-panel");
                const line = this.$refs.tabsline;
                let cal = 0;
                if (tabPanels.length < 5) {
                    cal = 12.5 + this.activeIndex * 25;
                } else if (tabPanels.length > 4) {
                    cal = 11.5 + this.activeIndex * 23;
                }
                line.style.left = cal + "%";
                this.lineShow = true;
            }
        }
    }
</script>
