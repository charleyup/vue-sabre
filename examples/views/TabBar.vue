<template lang="html">
    <mt-tabbar fixed :active="active">
        <mt-tabbar-item title="Tabs" name="Tabs" link="/Tabs">
            <i slot="icon" class="iconfont icon-car"></i>
        </mt-tabbar-item>
        <mt-tabbar-item title="Radio" name="Radio" link="/Radio">
            <i slot="icon" class="iconfont icon-car"></i>
        </mt-tabbar-item>
        <mt-tabbar-item title="Button" name="Button" link="/Button">
            <i slot="icon" class="iconfont icon-car"></i>
        </mt-tabbar-item>
        <mt-tabbar-item title="Cell" name="Cell" link="/Cell">
            <i slot="icon" class="iconfont icon-car"></i>
        </mt-tabbar-item>
        <mt-tabbar-item title="Toast" name="Toast" link="/Toast">
            <i slot="icon" class="iconfont icon-car"></i>
        </mt-tabbar-item>
    </mt-tabbar>
</template>

<script>
export default {
    data () {
        return {
            active: "Tabs"
        };
    },
    mounted () {
    },
    methods: {
    }
};
</script>

<style lang="less" scoped>
</style>
