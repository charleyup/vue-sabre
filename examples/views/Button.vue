<template lang="html">
    <div class="button">
        <mt-button>主要操作 Normal</mt-button>
        <mt-button class="loading">主要操作 HL</mt-button>
        <mt-button disabled>主要操作 Disabled</mt-button>
        <mt-button type="secondary">次要操作 Normal</mt-button>
        <mt-button type="secondary" class="loading">次要操作 HL</mt-button>
        <mt-button type="secondary" disabled>次要操作 Disabled</mt-button>
        <mt-button type="danger">警告类操作 Normal</mt-button>
        <mt-button type="danger" class="loading">警告类操作 HL</mt-button>
        <mt-button type="danger" disabled>警告类操作 Disabled</mt-button>
        <mt-button size="low">主要操作 Normal</mt-button>
        <mt-button size="low" class="loading">主要操作 HL</mt-button>
        <mt-button size="low" disabled>主要操作 Disabled</mt-button>
        <mt-button size="tiny">按钮</mt-button>
        <mt-button size="tiny" class="loading">按钮</mt-button>
        <mt-button size="tiny" disabled>按钮</mt-button>
    </div>
</template>

<script>
export default {
    data () {
        return {};
    }
};
</script>
<style lang="less" scoped>
    .button {
        display: flex;
        flex-direction: column;

        .mt-button:not(:last-child) {
            margin-bottom: 10px;
        }
    }
</style>
