import React, { createContext, useReducer, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './pages/Login';
import User from './pages/User';
import PrivateRoute from './routes/PrivateRoute';
import { AddNewUser } from './pages/AddNewUser';
import { EditUser } from './pages/EditUser';

export const AuthContext = createContext({})

const initState = {
  isAuthen: true,
}

const authReducer = (state:any=initState, action:any) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_AUTH': {
      return {
        ...state,
        isAuthen: payload,
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(authReducer, initState)

  return (
    <AuthContext.Provider value={{state, dispatch}}>
    <div className="App container">
      <Router>
        <Switch>
          <Route path={"/"} exact><Login /></Route>
          <Route path={"/login"} exact><Login /></Route>
          <PrivateRoute path={"/user/add"}><AddNewUser /></PrivateRoute>
          <PrivateRoute path={"/user/edit/:id"}><EditUser /></PrivateRoute>
          <PrivateRoute path={"/user"} ><User /></PrivateRoute>
        </Switch>
      </Router>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
