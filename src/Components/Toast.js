import { toast } from "react-toastify";
const successToast = (msg,close) => {
  return toast.success(msg, { position: toast.POSITION.TOP_RIGHT, autoClose:close });
};
const errorToast = (msg) => {
  return toast.error(msg, { position: toast.POSITION.TOP_RIGHT });
};
const warnToast = (msg) => {
  return toast.warn(msg, { position: toast.POSITION.TOP_RIGHT  });
};
export default {
  success(msg,close) {
    return successToast(msg,close||"");
  },
  warn(msg) {
    return warnToast(msg);
  },
  error(msg) {
    return errorToast(msg);
  },
};
