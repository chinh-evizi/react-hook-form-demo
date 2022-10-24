import * as React from 'react';
import HookForm from '../component/HookForm';
import { HookInput } from '../component/HookInput';
import { Redirect, useHistory } from 'react-router'
import {yupResolver} from '@hookform/resolvers/yup';
import { AuthContext } from '../App';
import { loginSchema, userSchema } from '../yup/userSchema';

export interface ILoginProps {
}

export default function Login(props: ILoginProps) {
    const { state, dispatch }: any = React.useContext(AuthContext);
    const history = useHistory();


    const onSubmit = (e: any) => {
        console.log(e);
        // dispatch({ type: "GET_AUTH", payload: true })
        // history.push("/user")
    }
    if (state?.isAuthen)
        return <Redirect to={"/user"} exact />

    return (
        <div>
            LOGIN
            <div style={{ width: "300px", margin: "0 auto" }}>
                <HookForm onSubmit={onSubmit} defaultValues={{
                    resolver: yupResolver(loginSchema)
                }}>
                    <HookInput name="email" label="Email" placeholder="Email" />
                    <HookInput name="password" label="Password" placeholder="Password" />
                    <div style={{ marginTop: "30px" }}>
                        <input type="submit" value="submit" />
                    </div>
                </HookForm>
            </div>
        </div >
    );
}


