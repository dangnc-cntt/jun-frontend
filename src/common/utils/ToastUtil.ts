import {Component} from "react";
import { toast } from 'react-toastify';

class ToastUtil{

    public info(message:string) {
        toast.info(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    }

    public success(message:string) {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    }

    public warning(message:string, id?: any) {
        toast.warn(message, {
            position: "top-center",
            autoClose: 2000,
            toastId: id,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    }

    public error(message:string) {
        toast.error(message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    }

}

export const toastUtil = new ToastUtil();

