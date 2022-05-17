<template>
    <button
        class="mt-button"
        :class="classObject"
        :disabled="disabled"
        @click="onClick">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: "mt-button",
        props: {
            size: {
                default: "normal",
                type: String,
                validator: (val) => {
                    return ["normal", "low", "tiny"].indexOf(val) !== -1;
                }
            },
            type: {
                default: "primary",
                type: String,
                validator: (val) => {
                    return ["primary", "secondary", "danger"].indexOf(val) !== -1;
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: true
            },
            border: {
                type: Boolean,
                default: true
            },
            // plain: {
            //     type: Boolean,
            //     default: false
            // }
        },
        data() {
            return {};
        },
        computed: {
            classObject () {
                return [
                    this.size,
                    this.type,
                    this.disabled && "disabled",
                    this.round && "round",
                    this.border && "border",
                    // this.plain && "plain"
                ]
            }
        },
        methods: {
            onClick(event) {
                this.$emit("click", event);
            }
        }
    };
</script>
