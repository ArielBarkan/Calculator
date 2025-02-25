// React and modules imports
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// https://fkhadra.github.io/react-toastify/introduction/
const NotifySuccess = (message: string) => {
    toast.success(message, {
        closeButton: false,
        position: "bottom-center",
        autoClose: 500,
        transition: Bounce
    });
};

const NotifyWarning = (message: string) => {
    toast.warning(message, {
        closeButton: false,
        position: "bottom-center",
        autoClose: 500,
        transition: Bounce
    });
};

const NotifyCustom = () => {

    return (
        <ToastContainer
            closeButton={false}
            position="bottom-center"
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