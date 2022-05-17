<template>
    <div class="mt-tabs-panel-item" :class="classPanel">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'mt-tabs-panel',
        data() {
            return {
            }
        },
        props: {
            label: { type: [String, Number], default: "" },
            value: { type: [String, Number], default: "" }
        },
        computed:{
            classPanel () {
                console.log("this.$parent.tabValue:", this.$parent.tabValue);
                console.log("value:", this.value);
                return this.$parent.tabValue === this.value ? "mt-tabs-panel-item-active" : "";
            }
        },
        watch: {
            label () {
                this.$parent.init();
            },
            value () {
                this.$parent.init();
            }
        },
        methods:{
        },
        mounted () {
            this.$nextTick(() => {
                this.$parent.init();
            });
        }
    }
</script>
