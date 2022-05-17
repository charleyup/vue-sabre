<template lang="html">
    <div class="cell">
        <mt-cell-group title="多选框(单个-true/false)">
            <mt-checkbox v-model="isDisabled" label="西瓜"></mt-checkbox>
        </mt-cell-group>
        <mt-cell-group title="多选框(单个--选中和不选中值分别绑定)">
            <mt-checkbox v-model="val" trueValue="西瓜" falseValue="不是西瓜" label="西瓜"></mt-checkbox>
            <mt-checkbox v-model="val" trueValue="不是西瓜" falseValue="西瓜" label="不是西瓜"></mt-checkbox>            
        </mt-cell-group>
        <mt-cell-group title="多选框">
            <mt-checkbox-group v-model="value">
                <mt-checkbox value="西瓜多行显示多行显示多行显示多行显示多行显示多行显示多行显示"></mt-checkbox>
                <mt-checkbox value="苹果"></mt-checkbox>
                <mt-checkbox value="冬瓜"></mt-checkbox>
            </mt-checkbox-group>
        </mt-cell-group>
        <mt-cell-group title="多选框(禁用)">
            <mt-checkbox-group v-model="disabledValue" :disabled="isDisabled">
                <mt-checkbox label="西瓜" value="watermelon"></mt-checkbox>
                <mt-checkbox label="苹果" value="apple"></mt-checkbox>
                <mt-checkbox label="橘子" value="orange"></mt-checkbox>
            </mt-checkbox-group>
            <div class="button">
                <mt-button @click="toggle">
                    <span v-if="isDisabled">启用</span>
                    <span v-else>禁用</span>
                </mt-button>
            </div>
        </mt-cell-group>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: ["西瓜","苹果"],
            disabledValue: ["watermelon"],
            val:"西瓜",
            isDisabled: false
        }
    },
    methods:{
        toggle(){
            this.isDisabled = !this.isDisabled;
        }
    }
}
</script>

<style lang="less" scoped>
</style>