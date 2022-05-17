<template lang="html">
    <div class="cell">
        <mt-cell-group title="单选框">
            <mt-radio-group v-model="value">
                <mt-radio value="西瓜"></mt-radio>
                <mt-radio value="苹果"></mt-radio>
                <mt-radio value="冬瓜"></mt-radio>
            </mt-radio-group>
        </mt-cell-group>
        <mt-cell-group title="单选框(禁用)">
            <mt-radio-group v-model="disabledValue" :disabled="isDisabled">
                <mt-radio label="西瓜" value="watermelon"></mt-radio>
                <mt-radio label="苹果" value="apple"></mt-radio>
                <mt-radio label="橘子" value="orange"></mt-radio>
            </mt-radio-group>
        </mt-cell-group>
        <div class="button">
            <mt-button @click="toggle">
                <span v-if="isDisabled">启用</span>
                <span v-else>禁用</span>
            </mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: "西瓜",
            disabledValue: "apple",
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
.button{
    display: flex;
    justify-content: center;
}
</style>
