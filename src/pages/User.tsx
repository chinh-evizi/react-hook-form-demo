import { Button } from 'antd';
import * as React from 'react';
import { useHistory } from 'react-router';

export interface IUserProps {
}

export default function User(props: IUserProps) {
  const history = useHistory();
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: 'flex', justifyContent: "space-between", margin: "20px 0px" }}>
        <h3>USER LIST</h3>
        <div><Button type='primary' onClick={() => history.push("/user/add")}>ADD NEW USER</Button></div>
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
              <th style={{ width: "150px" }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>CHINH</td>
              <td>NAM</td>
              <td>NAM</td>
              <td>NAM</td>
              <td style={{ display: 'flex', justifyContent: "space-around" }}>
                <button onClick={() => history.push("/user/edit/1")}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>CHINH</td>
              <td>NAM</td>
              <td>NAM</td>
              <td>NAM</td>
              <td style={{ display: 'flex', justifyContent: "space-around" }}>
                <button onClick={() => history.push("/user/edit/1")}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
