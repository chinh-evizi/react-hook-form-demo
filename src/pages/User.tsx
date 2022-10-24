import { Button } from "antd";
import * as React from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../App";

export interface IUserProps {}

export default function User(props: IUserProps) {
  const history = useHistory();
  const { state, dispatch }: any = React.useContext(AuthContext);

  React.useEffect(()=>{
    dispatch({type: "GET_DATA"})
  },[])

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0px",
        }}
      >
        <h3>USER LIST</h3>
        <div>
          <Button type="primary" onClick={() => history.push("/user/add")}>
            ADD NEW USER
          </Button>
        </div>
      </div>
      <div>
        <table id="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>GENDER</th>
              <th>COUNTRY</th>
              <th>PROJECT SIZE</th>
              <th>PROJECT ROLES</th>
              <th>PROJECT POSITION</th>
              <th style={{ width: "150px" }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {state?.data?.length > 0 && state?.data?.map((user: any) => (
              <tr key={user?.id}>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.age}</td>
                <td>{user?.gender?"Male":"Female"}</td>
                <td>{user?.country}</td>
                <td>{user?.project.projectSize}</td>
                <td>{user?.project.projectRoles}</td>
                <td>{user?.project.projectPosition}</td>
                <td style={{ display: "flex", justifyContent: "space-around" }}>
                  <button onClick={() => history.push("/user/edit/"+user?.id)}>
                    Edit
                  </button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
