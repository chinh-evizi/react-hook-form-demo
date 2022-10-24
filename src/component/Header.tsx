import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../App";

type Props = { user: any };

function Header({ user }: Props) {
  const history = useHistory();
  const { state, dispatch }: any = React.useContext(AuthContext);
  return (
    <header style={style}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <div>LOGO</div>
          <div>
            {user ? (
              <>
                <Button size="small" onClick={() => dispatch({type:"LOG_OUT", payload: false})}>
                  Logout
                </Button>
              </>
            ) : (
              <Button size="small" onClick={() => history.push("/login")}>
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

const style: any = {
  // position: "fixed",
  height: "50px",
  backgroundColor: "#999",
  width: "100%",
};
