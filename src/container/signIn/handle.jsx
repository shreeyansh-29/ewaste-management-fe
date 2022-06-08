export default {
  handleRedirect() {
    const role = localStorage.getItem("Roles");
    if (role === "CUSTOMER") {
      window.location.href = "/CustomerHome";
    } else if (role === "COLLECTOR") {
      window.location.href = "/CollectorHome";
    } else if (role === "VENDOR") {
      window.location.href = "/VendorHome";
    } else {
      window.location.href = "/";
    }
  },
};
