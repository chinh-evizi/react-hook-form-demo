import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from "../yup/userSchema";

const UserForm = ({ onSubmit }: any) => {
    const { register, handleSubmit, formState: { errors } }: any = useForm({ resolver: yupResolver(userSchema) });

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <label htmlFor="">Name</label>
                    <div className="input">
                        <input {...register("name")} />
                        <div>
                            <small style={{ color: "red" }}>{errors?.name?.message}</small>
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <label htmlFor="">Age</label>
                    <div className="input">
                        <input {...register("age")} />
                        <div>
                            <small style={{ color: "red" }}>{errors?.age?.message}</small>
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <label htmlFor="">Gender</label>
                    <div className="input">
                        <input {...register("gender")} />
                        <div>
                            <small style={{ color: "red" }}>{errors?.gender?.message}</small>
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <label htmlFor="">Country</label>
                    <div className="input">
                        <input {...register("country")} />
                        <div>
                            <small style={{ color: "red" }}>{errors?.country?.message}</small>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
                <div className="form-item-btn">
                    <input type="submit" value={"Submit"} />
                </div>
            </form>
        </>
    );
};

export default UserForm