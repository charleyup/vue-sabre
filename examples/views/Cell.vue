<template lang="html">
    <div class="cell">
        <mt-cell-group title="列表（Cell）">

            <mt-cell-item arrow title="单行列表"></mt-cell-item>

            <mt-cell-item
                title="单行列表"
                :img-right="imgUrl"
                arrow
                >
            </mt-cell-item>

            <mt-cell-item arrow>
                <div slot="left">单行列表</div>
                <div slot="right">内容详情</div>
            </mt-cell-item>

            <mt-cell-item
                title="双行列表"
                subtitle="描述信息"
                label="内容详情"
                arrow
                ></mt-cell-item>

            <mt-cell-item
                title="双行列表"
                subtitle="描述信息"
                label="内容详情"
                :img-right="imgUrl"
                arrow
                ></mt-cell-item>

            <mt-cell-item
                title="双行列表带图片"
                :img-left="imgUrl"
                subtitle="描述信息"
                label="内容详情"
                arrow
                >
            </mt-cell-item>

            <mt-cell-item
                title="单行列表带图标"
                icon="icon-car"
                label="内容详情"
                arrow
                >
            </mt-cell-item>

            <mt-cell-item
                title="首页链接"
                link="/"
                arrow
                >
            </mt-cell-item>

        </mt-cell-group>
        <mt-cell-group
            title="单选列表（Radio Cell）"
            type="radio"
            :value.sync="gender"
            :options="radioOPtions"
            >
        </mt-cell-group>

        <mt-cell-group
            title="多选列表（Checkbox Cell）"
            type="checkbox"
            :value.sync="payWay"
            :options="checkboxOPtions"
            >
        </mt-cell-group>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgUrl: "http://img.zcool.cn/community/019fb65925bc32a801216a3ef77f7b.png@2o.jpg",
            gender: "0",
            payWay: ["1"],
            radioOPtions: [
                {
                    title: "男性",
                    value: "1"
                },
                {
                    title: "女性",
                    value: "2"
                },
                {
                    title: "未知",
                    value: "0"
                }
            ],
            checkboxOPtions: [
                {
                    title: "微信",
                    subtitle: "马化腾家的",
                    value: "1"
                },
                {
                    title: "支付宝",
                    subtitle: "马云家的",
                    value: "2"
                },
                {
                    title: "银联",
                    subtitle: "国家的",
                    value: "3"
                },
                {
                    title: "PayPal",
                    value: "4"
                }
            ]
        }
    },
    watch: {
        gender: function (val) {
            console.log("gender", val);
        },
        payWay: function (val) {
            console.log("payWay", val);
        }
    }
}
</script>

<style lang="less" scoped>
</style>
