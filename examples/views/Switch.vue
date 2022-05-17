<template lang="html">
    <div class="cell">
        <mt-cell-group title="开关">
            <mt-cell-item>
                <div slot="left">是否开启：{{isOpen}}</div>
                <div slot="right">
                    <mt-switch v-model="isOpen"></mt-switch>
                </div>
            </mt-cell-item>
            <mt-cell-item>
                <div slot="left">是否开启（禁用）：{{isOpen}}</div>
                <div slot="right">
                    <mt-switch v-model="isOpen" disabled></mt-switch>
                </div>
            </mt-cell-item>
            <mt-cell-item>
                <div slot="left">值变化：{{value}}</div>
                <div slot="right">
                    <mt-switch v-model="value" trueValue="开" falseValue="关"></mt-switch>
                </div>
            </mt-cell-item>
        </mt-cell-group>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isOpen: true,
            value: "开"
        }
    },
    methods:{
    }
}
</script>

<style lang="less" scoped>
.button{
    display: flex;
    justify-content: center;
}
</style>
