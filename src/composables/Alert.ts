import Swal from "sweetalert2/dist/sweetalert2.js";

    
export const useAlert = () => {

    function showConfirmAlert(title, icon = "success", text = "", confirmButtonText = "Ok"){						
        const Toast = Swal.mixin({
            position: 'top-end',
            showConfirmButton: true,
            customClass: {
                confirmButton: "bg-none"
            },
            confirmButtonText,
            focusConfirm: false,
        });

        Toast.fire({
            icon,
            title,
            text
        });
    };

    function showTimeAlert(title, icon = "success"){							
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: true,
            timer: 3000,
            timerProgressBar: true,

            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });

        Toast.fire({
            icon,
            background: '$cor_indicadores_1',
            title
        });
    };

    return {
        showConfirmAlert,
        showTimeAlert
    }
}
    

 