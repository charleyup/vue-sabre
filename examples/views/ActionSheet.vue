<template>
    <div class="actionsheet">
        <mt-cell-group title="ActionSheet">
            <div class="button" @click="visible = true">无提示文本</div>
            <div class="button" @click="visible2 = true">有提示文本/超半屏</div>
            <div class="button" @click="visible3 = true">自定义模板</div>
        </mt-cell-group>

        <mt-actionsheet
            :visible.sync="visible"
            :data="listData"
            @click="onClick">
        </mt-actionsheet>
        <mt-actionsheet
            :visible.sync="visible2"
            :data="listData2"
            title="提示文本是可配置模块，如没有就不展示"
            @click="onClick">
        </mt-actionsheet>
        <mt-actionsheet
            :visible.sync="visible3"
            extraTitle="云玺停车场 | 闽A·7788F"
            extraBtnText="支 付"
            :extra="true">
            <div class="amount-wrapper">
                <span>支付总额</span>
                <span class="amount">¥50.00</span>
            </div>
            <div>
                <mt-cell-group
                    type="radio"
                    :value.sync="gender"
                    :options="radioOPtions"
                    >
                </mt-cell-group>
            </div>
        </mt-actionsheet>
        <mt-mask :visible="visible || visible2 || visible3" @mask-click="onHide"></mt-mask>
    </div>
</template>

<script>
export default {
    data () {
        return {
            visible: false,
            visible2: false,
            visible3: false,
            listData: [
                {
                type: 'danger',
                label: '选项一（警示项）'
                }, {
                    type: 'normal',
                    label: '选项一'
                }, {
                    type: 'normal',
                    label: '选项二'
                }
            ],
            listData2: [
                {
                    type: 'normal',
                    label: '选项一'
                }, {
                    type: 'normal',
                    label: '选项一'
                }, {
                    type: 'normal',
                    label: '选项一'
                }, {
                    type: 'normal',
                    label: '选项一'
                }, {
                    type: 'normal',
                    label: '选项一'
                }, {
                    type: 'danger',
                    label: '选项二'
                }, {
                    type: 'disabled',
                    label: '禁用选项'
                }
            ],
            gender: "0",
            radioOPtions: [
                {
                    title: "微信支付",
                    value: "1"
                },
                {
                    title: "工商银行支付",
                    value: "2"
                },
                {
                    title: "余额支付",
                    value: "0"
                }
            ]
        }
    },
    methods: {
        onHide () {
            this.visible = false;
            this.visible2 = false;
            this.visible3 = false;
        },
        onClick (item) {
            console.log(item.label, '被点击');
        }
    }
};
</script>

<style lang="less" scoped>
.button {
    height: 0.5rem;
    width: 2.5rem;
    margin: .3rem 0;
    line-height: 0.5rem;
    color: #666;
    border: 0.01rem solid #666;
    border-radius: .3rem;
    text-align: center;
}
.amount-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 1.9rem;
    font-size: .26rem;
    color: #000;
    .amount {
        font-size: .64rem;
        color: #333;
        line-height: .9rem;
    }
}
</style>
