<template>
    <label class="mt-radio">
        <input type="radio" @change="changeHandler" :disabled="isDisabled" :checked="checked"/>
        <span class="mt-radio-icon mt-radio-icon-right"><i class="iconfont icon-toast-correct"></i></span>
        <span class="mt-radio-text" v-if="!$slots.default">{{label ? label : value}}</span>
        <span class="mt-radio-text" v-else><slot></slot></span>
    </label>
</template>

<script type="text/babel">
    export default {
        name: 'mt-radio',
        data() {
            return {
                checked: false
            }
        },
        props: {
            value: {
                type: [Boolean, String, Number],
                default: false
            },
            label: {
                type: [Boolean, String, Number],
                default: ""            
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        computed:{
            _radioGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options._componentTag !== 'mt-radio-group') {
                        parent = parent.$parent;
                    } else {
                        return parent;
                    }
                }
                return false;
            },
            isDisabled() {
                return this.disabled || this._radioGroup.disabled;
            }
        },
        methods:{
            changeHandler (event) {
                if (this.isDisabled) return;
                this.checked = event.target.checked;
                if(this._radioGroup){
                    this._radioGroup.change(this.value);
                } else {
                    this.$emit("input", this.value);
                }
            },
        }
    }
</script>