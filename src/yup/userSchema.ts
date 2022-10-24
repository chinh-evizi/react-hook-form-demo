import { boolean, number, object, string } from "yup";

export const loginSchema = object({
    email: string().email("Enter the correct email format").required("Required"),
    password: string().required("Required").matches(/.*(?=[A-Z])/g,"Password must be least 1 uppercase letter")
})

export const userSchema = object({
    name: string().required("Required"),
    age: number().positive("Age must be great than 0").required("Required"),
    gender: boolean().required("Required"),
    country : string().required("Required"),

    projectName: string().required("Required"),
    projectSize: number().required("Required"),
    projectRoles: string().required("Required"),
    projectPosition: string().required("Required")
})