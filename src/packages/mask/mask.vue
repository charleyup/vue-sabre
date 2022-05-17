<template>
    <transition name="mt-mask-fade">
        <div
            class="mt-mask"
            v-show="visible"
            @click="onMaskClick"
            @touchmove.prevent>
        </div>
    </transition>
</template>
<script>
export default {
    name: "mt-mask",
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    methods: {
        onMaskClick (event) {
            this.$emit("mask-click", event);
        }
    }
};
</script>
