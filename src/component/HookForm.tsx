import React from "react";
import { useForm } from "react-hook-form";

export default function HookForm({ defaultValues, children, onSubmit }: any) {
  const methods = useForm({ ...defaultValues });
  const {
    handleSubmit,
    formState: { errors },
  }: any = methods;

  console.log(defaultValues);
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child:any) => {
        return child.props.name ? (
          <>
            {React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })}
            <div>
              <small style={{ color: "red" }}> {errors?.[child.props.name]?.message} </small>
            </div>
          </>
        ) : (
          child
        );
      })}
    </form>
  );
}
