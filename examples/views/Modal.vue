<template>
    <div class="picker">
        <mt-cell-group title="picker">
            <div class="button" @click="visible = true">普通modal</div>
            <div class="button" @click="visible2 = true">列按钮modal</div>
            <div class="button" @click="visible3 = true">自定义modal</div>
        </mt-cell-group>
        <mt-modal :visible.sync="visible" title="标题" icon="icon-close" cancel="次要操作" desc="信息必须准确和真实，提示用户如何操作"></mt-modal>
        <mt-modal :visible.sync="visible2" title="标题" :btnRow="false" :options="options" desc="信息必须准确和真实，提示用户如何操作"></mt-modal>
        <mt-modal :visible.sync="visible3" title="图形验证码" desc="请输入正确的图形验证码">
            <div class="code-wrapper">
                <div class="code"></div>
                <div class="input-wrapper">
                    <div class="input"></div>
                    <div class="input"></div>
                    <div class="input"></div>
                    <div class="input"></div>
                </div>
            </div>
        </mt-modal>
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
            options: [
                {
                    label: "选项一",
                    value: 1
                },
                {
                    label: "选项二",
                    value: 2
                },
                {
                    label: "选项三",
                    value: 3
                }
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
.code-wrapper {
    padding: .17rem .8rem .21rem;
    .code {
        width: 3rem;
        height: .9rem;
        margin: 0 auto;
        border: .01rem solid rgba(63,63,63,.5);
    }
    .input-wrapper {
        display: flex;
        justify-content: space-between;
        width: 3.92rem;
        height: .91rem;
        padding: .17rem 0 0;
        .input {
            width: .83rem;
            height: 100%;
            border-bottom: .01rem solid #ddd;
        }
    }
}
</style>
