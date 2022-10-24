import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';

export default function HookForm({ defaultValues, children, onSubmit }: any) {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;
    console.log(defaultValues.resolver);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map(children, child => {
                return child.props.name
                    ? React.createElement(child.type, {
                        ...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name
                        }
                    })
                    : child;
            })}
        </form>
    )
}