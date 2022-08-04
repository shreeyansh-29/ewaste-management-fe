import Swal from "sweetalert2";

export function handleSwal() {
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#228B22",
    cancelButtonColor: "#d33",
    confirmButtonText: "Logout",
  }).then((results) => {
    if (results.isConfirmed) {
      window.location.href = "/Signin";
      localStorage.clear();
    }
  });
}
