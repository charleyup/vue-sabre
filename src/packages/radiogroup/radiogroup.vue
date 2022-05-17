<template>
    <div>
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'mt-radio-group',
        data () {
            return {
                currentValue: this.value
            }
        },
        props: {
            value: {
                type: [String, Number],
                default: ""
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            updateValue() {
                const value = this.value;
                this.childrens = this.$children.filter(item => item.$options.name === 'mt-radio');
                if (this.childrens) {
                    this.childrens.forEach(child => {
                        child.checked = value == child.value;
                    });
                }
            },
            change(val) {
                this.currentValue = val;
                this.updateValue();
                this.$emit('input', val);
            }
        },
        computed:{
        },
        watch: {
            value() {
                this.updateValue();
            }
        },
        mounted() {
            this.$nextTick(this.updateValue);
        }
    }
</script>