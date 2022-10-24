import React, { createContext, useEffect, useReducer, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";
import PrivateRoute from "./routes/PrivateRoute";
import { AddNewUser } from "./pages/AddNewUser";
import { EditUser } from "./pages/EditUser";
import Header from "./component/Header";

export const AuthContext = createContext({});

const initState = {
  userLogin: {},
  userById: {},
  data: [],
};

const authReducer = (state: any = initState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_LOGIN": {
      localStorage.setItem("loginRHF", JSON.stringify(payload));
      return {
        ...state,
        userLogin: payload,
      };
    }
    case "GET_AUTH": {
      try {
        const data: any = JSON.parse(localStorage.getItem("loginRHF") || "{}");
        return { ...state, userLogin: data };
      } catch (error) {
        break;
      }
    }
    case "LOG_OUT": {
      localStorage.removeItem("loginRHF");
      return { ...state, userLogin: {} };
    }
    case "GET_DATA": {
      try {
        const data: any =
          JSON.parse(localStorage.getItem("dataRHF") || "[]") || [];
        return { ...state, data: data };
      } catch (error) {
        break;
      }
    }
    case "GET_USER_BY_ID": {
      try {
        const data: any =
          JSON.parse(localStorage.getItem("dataRHF") || "[]") || [];
        const userById =
          data?.length < 1
            ? {}
            : data?.filter((item: any) => String(item?.id) === String(payload));
        return {
          ...state,
          userById: userById?.length > 0 ? { ...userById[0] } : {},
        };
      } catch (error) {
        break;
      }
    }
    case "ADD_USER": {
      try {
        const data: any = JSON.parse(localStorage.getItem("dataRHF") || "[]");
        localStorage.setItem("dataRHF", JSON.stringify([...data, payload]));
        return { ...state, data: [...data, payload] };
      } catch (error) {
        console.log(error);
        break;
      }
    }
    case "EDIT_USER": {
      try {
        const data: any = JSON.parse(localStorage.getItem("dataRHF") || "[]");
        let newData = data.filter((item: any) => item?.id !== payload?.id);
        newData.push({id: payload?.id, ...payload.data})
        localStorage.setItem("dataRHF", JSON.stringify([...newData]));
        return { ...state, data: [...newData] };
      } catch (error) {
        console.log(error);
        break;
      }
    }

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(authReducer, initState);

  useEffect(() => {
    dispatch({ type: "GET_AUTH" });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div className="App container">
        <Router>
          <Header user={state?.userLogin} />
          <Switch>
            <Route path={"/"} exact>
              <Login />
            </Route>
            <Route path={"/login"} exact>
              <Login />
            </Route>
            <PrivateRoute path={"/user/add"}>
              <AddNewUser />
            </PrivateRoute>
            <PrivateRoute path={"/user/edit/:id"}>
              <EditUser />
            </PrivateRoute>
            <PrivateRoute path={"/user"}>
              <User />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
