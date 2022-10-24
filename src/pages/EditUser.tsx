import { Button } from "antd";
import * as React from "react";
import { useHistory, useParams } from "react-router";
import { AuthContext } from "../App";
import UserForm from "../component/UserForm";

export interface IEditUserProps {}

export function EditUser(props: IEditUserProps) {
  const { state, dispatch }: any = React.useContext(AuthContext);
  const params: any = useParams();
  const history = useHistory();
  const onSubmitEdit = (data: any) => {
    console.log(data);
    const id = data?.id;
    delete data?.id;
    let newData: any = {};
    Object.entries({ ...data })?.map((item: any) => {
      if (item[0].includes("project")) {
        newData = {
          ...newData,
          project: { ...newData?.project, [item[0]]: item[1] },
        };
      } else {
        newData = { ...newData, [item[0]]: item[1] };
      }
    });
    
    console.log(newData);
    dispatch({ type: "EDIT_USER", payload: {id, data: newData} });
    history.push("/user")
  };

  React.useEffect(() => {
    dispatch({ type: "GET_USER_BY_ID", payload: params?.id });
  }, []);

  console.log(state?.userById);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <div>
          <Button onClick={() => history.push("/user")}>
            Back to User list
          </Button>
        </div>
        <h3>EDIT USER</h3>
      </div>
      <UserForm onSubmit={onSubmitEdit} defaultValues={state?.userById} />
    </div>
  );
}
