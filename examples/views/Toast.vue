<template lang="html">
    <div class="toast">
        <mt-cell-group title="吐司（Toast）">
            <mt-cell-item title="Normal" arrow @click.native="$toast('最长文本不超过14个字')"></mt-cell-item>
            <mt-cell-item title="Long text" arrow @click.native="$toast('很长很长很长很长很长很长的文本')"></mt-cell-item>
            <mt-cell-item title="Success" arrow @click.native="$toast({ type: 'success', message: '成功提示' })"></mt-cell-item>
            <mt-cell-item title="Warning" arrow @click.native="$toast({ type: 'warning', message: '警示提示' })"></mt-cell-item>
            <mt-cell-item title="Error" arrow @click.native="$toast({ type: 'error', message: '失败提示' })"></mt-cell-item>
        </mt-cell-group>
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
</style>
