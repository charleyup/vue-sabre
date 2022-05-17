<template>
    <input
        class="mt-switch"
        type="checkbox"
        :true-value="trueValue"
        :false-value="falseValue"
        :disabled="disabled"
        v-model="checked"
    />
</template>
<script>
export default {
    name: "mt-switch",
    props: {
        value: [String, Number, Boolean],
        disabled: {
            type: Boolean,
            default: false
        },
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        }
    },
    data() {
        return {
            checked: this.value
        };
    },
    methods: {},
    watch: {
        checked(val) {
            this.$emit('input', val);
            this.$emit('change', val);
        },
        value(val) {
            this.checked = val;
        }
    }
};
</script>
