// src/utils/loadingAlert.js
import Swal from "sweetalert2";

export const showLoadingAlert = () => {
  Swal.fire({
    title: "Loading...",
    text: "Please wait while we load the data.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    timer: 1000,
  });
};

export const hideLoadingAlert = () => {
  Swal.close();
};
