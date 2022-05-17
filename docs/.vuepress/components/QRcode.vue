<template lang="html">
    <canvas id="canvas"></canvas>
</template>

<script>
import QRcode from "qrcode";
export default {
    data () {
        return {};
    },
    mounted () {
        const canvas = document.getElementById("canvas");
        const url = `${location.origin}/demo`;
        // const url = "https://dev-vue-sabre.maysatech.com/demo";
        QRcode.toCanvas(canvas, url);
    }
}
</script>

<style lang="css">
</style>
