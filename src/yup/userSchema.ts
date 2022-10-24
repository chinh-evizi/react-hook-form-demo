import { boolean, number, object, string } from "yup";

export const loginSchema = object({
    email: string().email().required(),
    password: string().required().matches(/.*(?=[A-Z])/g)
})

export const userSchema = object({
    name: string().required("Required"),
    age: number().positive("Age must be great than 0").required("Required"),
    gender: boolean().required("Required"),
    country : string().required("Required"),
})