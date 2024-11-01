// Funcion de exito
function successAlertRegister (nombre) {
  // Swal.fire({
  //     position: "top-center",
  //     icon: "success",
  //     title: nombre + " registrado exitosamente",
  //     showConfirmButton: false,
  //     timer: 1500
  //   });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: nombre + " registrado exitosamente"
  });
}


// Funcion de exito
function successAlertDelete (nombre) {
// Swal.fire({
//     position: "top-center",
//     icon: "success",
//     title: nombre + " eliminado exitosamente",
//     showConfirmButton: false,
//     timer: 1500
//   });

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "success",
  title: nombre + " eliminado exitosamente"
});
}


//  Funcion de error
function errorAlert(mensaje){
  Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Lo sentimos! "+mensaje,
      showConfirmButton:false,
      timer:2000
    });
}