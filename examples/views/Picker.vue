<template>
    <div class="picker">
        <mt-cell-group title="picker">
            <div class="button" @click="visible = true">单列picker</div>
            <div class="button" @click="visible2 = true">多列picker</div>
            <div class="button" @click="visible3 = true">年月日时分picker</div>
        </mt-cell-group>
        <mt-picker :visible.sync="visible" :data="data"></mt-picker>
        <mt-picker :visible.sync="visible2" :data="data2"></mt-picker>
        <mt-picker :visible.sync="visible3" type="time"></mt-picker>
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
            data: [
                [
                    {
                        label: "一",
                        value: 1
                    },
                    {
                        label: "二",
                        value: 2
                    },
                    {
                        label: "三",
                        value: 3
                    }
                ]
            ],
            data2: [
                [
                    {
                        label: "一",
                        value: 1
                    },
                    {
                        label: "二",
                        value: 2
                    },
                    {
                        label: "三",
                        value: 3
                    }
                ],
                [
                    {
                        label: "四",
                        value: 4
                    },
                    {
                        label: "五",
                        value: 5
                    },
                    {
                        label: "六",
                        value: 6
                    }
                ]
            ]
        }
    },
    methods: {
        onHide () {
            this.visible = false;
            this.visible2 = false;
            this.visible3 = false;
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
</style>
