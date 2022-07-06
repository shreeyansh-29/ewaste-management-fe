import {toast} from "react-toastify";
export default {
  success(msg, close) {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: close,
    });
  },
  warn(msg2) {
    toast.warn(msg2, {position: toast.POSITION.TOP_RIGHT});
  },
  error(msg3) {
    toast.error(msg3, {position: toast.POSITION.TOP_RIGHT});
  },
};
