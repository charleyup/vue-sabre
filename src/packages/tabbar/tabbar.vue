<template>
    <footer class="mt-tabbar" :class="tabClass">
        <slot></slot>
    </footer>
</template>

<script type="text/babel">
    export default {
        name: "mt-tabbar",
        props: {
            fixed: { type: Boolean, default: true },
            activeClass: { type: String, default: "router-link-active" },
            active: [String, Number]
        },
        data () {
            return {
            }
        },
        computed: {
            tabClass () {
                return this.fixed ? "mt-tabbar-fixed" : "";
            }
        },
        watch: {
            active () {
                this.activeChange();
            }
        },
        methods: {
            activeChange () {
                console.log("activeChange");
                const children = this.$children.filter(item => item.$options._componentTag === "mt-tabbar-item");
                children.forEach((item) => {
                    if (item.name === this.active) {
                        console.log("active item:", item);
                        this.$set(item, "isActive", true);
                    } else this.$set(item, "isActive", false);
                });
            }
        },
        mounted () {
            this.activeChange();
        }
    }
</script>
