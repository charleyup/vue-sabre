<template>
    <router-link
        :to="link"
        class="mt-tabbar-item"
        :class="classes"
        :active-class="$parent.activeClass"
        :tag="tag">
        <span class="mt-tabbar-icon">
            <slot name="icon"></slot>
        </span>
        <span class="mt-tabbar-txt">{{title}}</span>
    </router-link>
</template>

<script type="text/babel">
    export default {
        name: "mt-tabbar-item",
        props: {
            link: String,
            tag: String,
            title: [String, Number],
            name: [String, Number]
        },
        data() {
            return {
                isActive: this.active
            }
        },
        computed:{
            classes() {
                return this.isActive ? "mt-tabbar-item-active" : "";
            }
        },
        watch: {
        },
        methods:{
        }
    }
</script>
