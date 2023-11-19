import {AxiosInstance} from "axios";

export type AxiosWrapper<T> = {
    data: T,
    ax: AxiosInstance,
    id: string,
}