<template>
    <div class="mt-cell-item" :class="{ 'large': this.subtitle && !this.$slots.left, 'active': this.checkboxActive, 'checkbox': this.type === 'checkbox' }" @click="onClick">
        <div class="mt-cell-item__content mt-cell-item__content_icon" v-if="this.icon">
            <i class="iconfont" :class="this.icon"></i>
        </div>
        <div class="mt-cell-item__content mt-cell-item__content_img" v-if="this.imgLeft">
            <img :src="this.imgLeft">
        </div>
        <div class="mt-cell-item__content mt-cell-item__content_left">
            <slot name="left"></slot>
            <template v-if="this.title && !this.$slots.left">
                <p>{{this.title}}</p>
                <p v-if="this.subtitle" class="content__subtitle">{{this.subtitle}}</p>
            </template>
        </div>
        <div class="mt-cell-item__content mt-cell-item__content_right">
            <slot name="right">
                <template v-if="this.label && !this.imgRight">
                    <p>{{this.label}}</p>
                </template>
                <img :src="imgRight" v-if="this.imgRight">
            </slot>
            <i class="iconfont icon-right" v-if="this.arrow"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: "mt-cell-item",
    props: {
        type: {
            type: String,
            validator: (val) => {
                return ["radio", "checkbox"].indexOf(val) !== -1;
            }
        },
        imgLeft: {
            type: String
        },
        imgRight: {
            type: String
        },
        icon: {
            type: String
        },
        title: {
            type: String
        },
        subtitle: {
            type: String
        },
        label: {
            type: String
        },
        value: {
            type: String
        },
        checkboxValue: {
            type: Array
        },
        link: {
            type: String
        },
        arrow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    computed: {
        checkboxActive: function () {
            return (this.type === "checkbox") && (this.checkboxValue.indexOf(this.value) !== -1);
        }
    },
    created () {},
    methods: {
        onClick () {
            if (this.link) {
                this.$router.push(this.link);
            }
        }
    }
};
</script>
