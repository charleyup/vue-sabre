<template lang="html">
    <div class="home">
        <mt-cell-group title="组件（Component）">
            <mt-cell-item title="Cell" link="/cell" arrow></mt-cell-item>
            <mt-cell-item title="Button" link="/button" arrow></mt-cell-item>
            <mt-cell-item title="ActionSheet" link="/action-sheet" arrow></mt-cell-item>
            <mt-cell-item title="Radio" link="/radio" arrow></mt-cell-item>
            <mt-cell-item title="Checkbox" link="/checkbox" arrow></mt-cell-item>
            <mt-cell-item title="Tabs" link="/tabs" arrow></mt-cell-item>
            <mt-cell-item title="TabBar" link="/tabbar" arrow></mt-cell-item>
            <mt-cell-item title="Switch" link="/switch" arrow></mt-cell-item>
            <mt-cell-item title="Picker" link="/picker" arrow></mt-cell-item>
            <mt-cell-item title="Modal" link="/modal" arrow></mt-cell-item>
        </mt-cell-group>
        <mt-cell-group title="方法（Method）">
            <mt-cell-item title="Toast" link="/toast" arrow></mt-cell-item>
            <!-- <mt-cell-item title="ScrollTop" arrow></mt-cell-item> -->
            <mt-cell-item title="Loading" arrow @click="loading"></mt-cell-item>
            <!-- <mt-cell-item title="Dialog" arrow></mt-cell-item> -->
        </mt-cell-group>
        <mt-cell-group title="指令（Directive）">
            <!-- <mt-cell-item title="v-focus"></mt-cell-item> -->
        </mt-cell-group>
        <mt-cell-group title="过滤器（Filter）"></mt-cell-group>
    </div>
</template>

<script>
export default {
    data () {
        return {};
    },
    methods: {
        routeTo (name) {
            this.$router.push({ name: name });
        },
        loading () {
            this.$loading();
            setTimeout(() => {
                this.$loading.hide();
            }, 2000);
        }
    },
    mounted () {}
};
</script>
<style lang="less" scoped>
.home {
    // padding: 0.2rem;
    display: flex;
    flex-direction: column;
    .mt-button:not(:last-child) {
        margin-bottom: 10px;
    }
    a {
        text-decoration: none;
        color: white;
    }
}
</style>
