import Swal from "sweetalert2";
export default function sweetAlert(
  title,
  icon,
  showCancelButton,
  confirmButtonColor,
  cancelButtonColor,
  confirmButtonText
) {
  Swal.fire({
    title: title,
    icon: icon,
    showCancelButton: showCancelButton,
    confirmButtonColor: confirmButtonColor,
    cancelButtonColor: cancelButtonColor,
    confirmButtonText: confirmButtonText,
  }).then((results) => {
    if (results.isConfirmed) {
      localStorage.clear();
      window.location.href = "/Signin";
    }
  });
}
