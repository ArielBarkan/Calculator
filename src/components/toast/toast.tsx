import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// https://fkhadra.github.io/react-toastify/introduction/
const NotifySuccess = (message: string) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 500,
        transition: Bounce
    });
};

const NotifyWarning = (message: string) => {
    toast.warning(message, {
        position: "top-center",
        autoClose: 500,
        transition: Bounce
    });
};

const NotifyCustom = () => {

    return (
        <ToastContainer

            position="top-center"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="dark"
            transition={Bounce}
        />
    );

};

export { NotifySuccess, NotifyWarning, NotifyCustom };