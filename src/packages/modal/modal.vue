<template>
<transition name="mt-mask-fade">
    <div class="mt-modal" v-show="visible">
        <div class="mt-modal__icon" v-if="icon"><i class="iconfont" :class="icon"></i></div>
        <div class="mt-modal__title" v-if="title">{{title}}</div>
        <div class="mt-modal__desc">{{desc}}</div>
        <slot></slot>
        <div class="mt-modal__btn" :class="btnRow ? 'row' : 'column'">
            <template v-if="btnRow">
                <span v-if="cancel" @click.self="onCancel">{{cancel}}</span>
                <span @click.self="onConfirm">{{confirm}}</span>
            </template>
            <template v-else>
                <span v-for="(item, idx) in options" :key="idx" @click.self="onClick(item)">
                    {{item.label}}
                </span>
            </template>
        </div>
    </div>
</transition>
</template>
<script>
export default {
    name: "mt-modal",
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        desc: {
            type: String,
            default: ""
        },
        confirm: {
            type: String,
            default: "主要操作"
        },
        cancel: {
            type: String,
            default: ""
        },
        btnRow: {
            type: Boolean,
            default: true
        },
        options: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        // 主要操作点击事件
        onConfirm () {
            this.$emit("confirm");
            this.$emit("update:visible", false);
        },
        // 次要操作点击事件
        onCancel () {
            this.$emit("cancel");
            this.$emit("update:visible", false);
        },
        // 自定义按钮点击事件
        onClick (item) {
            this.$emit("click", item);
            this.$emit("update:visible", false);
        }
    }
};
</script>
