import Modal from "./modal.vue";
import "./modal.less";
Modal.install = function(Vue) {
    Vue.component(Modal.name, Modal);
};
export default Modal;
