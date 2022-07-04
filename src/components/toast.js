import {toast} from "react-toastify";
export default {
  success(msg, close) {
    return toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: close,
    });
  },
  warn(msg) {
    return toast.warn(msg, {position: toast.POSITION.TOP_RIGHT});
  },
  error(msg) {
    return toast.error(msg, {position: toast.POSITION.TOP_RIGHT});
  },
};
