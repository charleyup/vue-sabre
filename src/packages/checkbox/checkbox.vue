<template>
    <div class="mt-checkbox">
        <template v-if="_checkboxGroup">
            <input type="checkbox" aria-hidden="true" v-model="model" :value="value" @change="changeHandler" :disabled="isDisabled" />
        </template>
        <template v-else>
            <input type="checkbox"
                   v-model="checked"
                   :disabled="isDisabled"
                   :true-value="trueValue"
                   :false-value="falseValue"
            />
        </template>
        <span class="mt-checkbox-icon"><i class="iconfont icon-toast-correct"></i></span>
        <span class="mt-checkbox-text" v-if="!$slots.default">{{label ? label : value}}</span>
        <span class="mt-checkbox-text" v-else><slot></slot></span>
    </div>
</template>
<script>
export default {
    name: "mt-checkbox",
    data() {
        return {
            model: [],
            checked: this.value,
        };
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
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        }
    },
    computed:{
        _checkboxGroup() {
            let parent = this.$parent;
            if (parent.$options && parent.$options.name === 'mt-checkbox-group') {
                return parent;
            } else {  
                return false;
            }  
        },
        isDisabled() {
            return this.disabled || this._checkboxGroup.disabled;
        }
    },
    methods: {
        changeHandler() {      
            if (this.isDisabled) return;
            setTimeout(() => {
                this.$parent.change(this.model);
            }, 0);
        }
    },
    watch: {
        checked(val) {
            this.$emit('input', val);
        },
        value(val) {
            this.checked = val;
        }
    },
};
</script>
