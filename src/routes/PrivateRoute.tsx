import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {Redirect} from "react-router"
import { AuthContext } from '../App';

export interface IPrivateRouteProps {
    children: React.ReactNode;
    path: string;
}

export default function PrivateRoute({ children, path }: IPrivateRouteProps) {
    const { state, dispatch }: any = React.useContext(AuthContext);
    if (state?.isAuthen) {
        return (
            <Route path={path} exact>
                {children}
            </Route>
        );
    } else return <Redirect to={"/"} exact/>
}


