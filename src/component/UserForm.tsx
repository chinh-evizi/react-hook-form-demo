import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../yup/userSchema";

const UserForm = ({ onSubmit, defaultValues }: any) => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  }: any = useForm({
    resolver: yupResolver(userSchema)
  
  });

  const [isShowOtherCountry, setIsShowOtherCountry] = useState(false);
  const [size, setSize] = useState(0);
  //   const watchSize = watch("projectSize");

  useEffect(() => {
    if (defaultValues?.id) {
      // setSize(defaultValues?.project?.projectSize)

      Object?.entries(defaultValues)?.map((item: any) => {
        if (item[0] === "project") {
          Object?.entries(item[1])?.map((prj: any) => {
            setValue(prj[0], prj[1]);
          });
        } else if (item[0] === "gender"){
          setValue(item[0], Number(item[1]));
        } else
        setValue(item[0], item[1]);
      });
    }
  }, [defaultValues]);

  const onChangeCountry = (e: any) => {
    console.log(e.target.value);
    if (e.target.value === "other") {
      setIsShowOtherCountry(true);
    } else {
      setIsShowOtherCountry(false);
      setValue("country", "viet");
    }
  };

  const handleChangeSize = (e: any) => {
    console.log(e.target.value);
    if (e.target.value < 5) {
      setValue("projectRoles", "dev");
    }
    if (e.target.value <= 3) {
      setValue("projectPosition", "not require");
    } else setValue("projectPosition", "");
    setSize(e.target.value);
  };

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
            <select {...register("gender")}>
              <option value="0">female</option>
              <option value="1">male</option>
            </select>
            <div>
              <small style={{ color: "red" }}>{errors?.gender?.message}</small>
            </div>
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="">Country</label>
          <div className="input">
            <select {...register("country")} onChange={onChangeCountry}>
              <option value="viet">Viet Nam</option>
              <option value="other">Other</option>
            </select>
            {isShowOtherCountry && (
              <input style={{ marginTop: "5px" }} {...register("country")} />
            )}
            <div>
              <small style={{ color: "red" }}>{errors?.country?.message}</small>
            </div>
          </div>
        </div>
        <div className="box-shadow">
          <div className="form-item">PROJECT: </div>
          <div className="form-item">
            <label htmlFor="">Name</label>
            <div className="input">
              <input {...register("projectName")} />
              <div>
                <small style={{ color: "red" }}>
                  {errors?.projectName?.message}
                </small>
              </div>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="">Size</label>
            <div className="input">
              <input
                {...register("projectSize")}
                onChange={(e) => handleChangeSize(e)}
              />
              <div>
                <small style={{ color: "red" }}>
                  {errors?.projectSize?.message}
                </small>
              </div>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="">Roles</label>
            <div className="input">
              <select {...register("projectRoles")}>
                <option value="dev">Dev</option>
                <option value="qa">QA</option>
                <option value="pm">PM</option>
                {(Number(size) > 5 || Number(size) === 0) && (
                  <>
                    <option value="dev-lead">Dev Lead</option>
                    <option value="qa-lead">QA Lead</option>
                  </>
                )}
              </select>
              <div>
                <small style={{ color: "red" }}>
                  {errors?.projectRoles?.message}
                </small>
              </div>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="">Position</label>
            <div className="input">
              <input {...register("projectPosition")} disabled={size <= 3} />
              <div>
                <small style={{ color: "red" }}>
                  {errors?.projectPosition?.message}
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="form-item-btn">
          <input type="submit" value={"Submit"} />
        </div>
      </form>
    </>
  );
};

export default UserForm;
