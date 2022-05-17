<template>
    <transition name="mt-move">
        <div class="mt-actionsheet" v-show="visible">
            <div v-if="!extra">
                <div class="mt-actionsheet__panel">
                    <h3 class="mt-actionsheet__item mt-actionsheet__title" v-if="title">{{title}}</h3>
                    <div class="mt-actionsheet__content">
                        <div
                            :class="{'danger': item.type === 'danger', 'disabled': item.type === 'disabled'}"
                            v-for="(item, index) in data"
                            class="mt-actionsheet__item"
                            @click.self="onClick(item)"
                            :key="index"
                        >{{item.label}}</div>
                    </div> 
                </div>
                <div @click.self="onCancel" class="mt-actionsheet__item mt-actionsheet__cancel">取消</div>
            </div>
            <div v-if="extra" class="mt-actionsheet__extra">
                <div class="mt-actionsheet__extratitle">
                    {{extraTitle}}
                    <i @click.self="onCancel" class="iconfont icon-popup-close"></i>
                </div>
                <div class="mt-actionsheet__slot">
                    <slot></slot>
                </div>
                <div class="mt-actionsheet__confirm" @click.self="onConfirm">{{extraBtnText}}</div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: "mt-actionsheet",
    props: {
        data: {
            type: Array,
            default () {
                return [];
            }
        },
        title: {
            type: String,
            default: ""
        },
        visible: {
            type: Boolean,
            default: false
        },
        extra: {
            type: Boolean,
            default: false
        },
        extraTitle: {
            type: String,
            default: ""
        },
        extraBtnText: {
            type: String,
            default: "确 认"
        }
    },
    data() {
        return {};
    },
    methods: {
        onCancel () {
            this.$emit("update:visible", false);
        },
        onClick (item) {
            if (item.type === 'disabled') {
                return;
            }
            this.$emit("click", item);
            this.$emit("update:visible", false);
        },
        onConfirm () {
            this.$emit("update:visible", false);
            this.$emit("confirm");
        }
    }
};
</script>
