<template>
    <div class="mt-checkboxgroup">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "mt-checkbox-group",
    props: {
        value: {
            type: Array,
            default: () => []
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    methods: {
        updateValue () {
            const value = this.value;
            this.childrens = this.$children.filter(item => item.$options.name === "mt-checkbox");

            if (this.childrens) {
                this.childrens.forEach(child => {
                    child.model = value;
                });
            }
        },
        change (val) {
            this.$emit("input", val);
        }
    },
    watch: {
        value () {
            this.updateValue();
        }
    },
    mounted() {
        this.$nextTick(this.updateValue);
    }
};
</script>
