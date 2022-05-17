<template>
    <div class="mt-cell-group">
        <p v-if="this.title" class="mt-cell-group__title">{{title}}</p>
        <div class="mt-cell-group__content">
            <!-- radio -->
            <template v-if=" this.type === 'radio' ">
                <mt-cell-item
                    v-for="item in this.options"
                    :key="item.value"
                    :title="item.title"
                    :subtitle="item.subtitle"
                    :label="item.label"
                    :icon="item.icon"
                    @click.native="onClick(item)"
                    >
                    <div slot="right">
                        <i class="iconfont icon-toast-correct" :class="{ active: value === item.value }"></i>
                    </div>
                </mt-cell-item>
            </template>

            <!-- checkbox -->
            <template v-else-if="this.type === 'checkbox' ">
                <mt-cell-item
                    v-for="item in this.options"
                    :key="item.value"
                    :title="item.title"
                    :subtitle="item.subtitle"
                    :label="item.label"
                    :value="item.value"
                    :checkboxValue="value"
                    icon="icon-correct"
                    type="checkbox"
                    @click.native="onClick(item)"
                    >
                </mt-cell-item>
            </template>

            <!-- normal -->
            <template v-else>
                <slot></slot>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name: "mt-cell-group",
    props: {
        title: {
            type: String
        },
        type: {
            type: String,
            validator: (val) => {
                return ["radio", "checkbox"].indexOf(val) !== -1;
            }
        },
        value: {},
        options: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        onClick (item) {
            if (this.type === "radio") {
                this.$emit("update:value", item.value);
            } else if (this.type === "checkbox") {
                if (this.value.indexOf(item.value) === -1) {
                    this.$emit("updata:value", this.value.push(item.value));
                } else {
                    this.$emit("update:value", this.value.filter(i => {
                        return i !== item.value;
                    }));
                }
            }
        }
    },
    created () {}
};
</script>
