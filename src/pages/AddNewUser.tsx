import { Button } from 'antd';
import * as React from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../App';
import UserForm from '../component/UserForm';

export interface IAddNewUserProps {
}

export function AddNewUser(props: IAddNewUserProps) {
    const { state, dispatch }: any = React.useContext(AuthContext);
    const history = useHistory();

    const onSubmit = (data: any) => {
        let newData:any = {id: new Date().getTime()};
        Object.entries({...data})?.map((item:any)=> {
            if(item[0].includes("project")){
                newData = { ...newData, project: {...newData?.project, [item[0]]:item[1]} }
            } else {
                newData ={...newData, [item[0]]:item[1]}
            }
        })
        console.log(newData);
        dispatch({type: "ADD_USER", payload: newData})
        history.push("/user")
    }

    

    return (
        <div>
            <div style={{display: 'flex', justifyContent: "space-between", padding:'10px'}}>
                <div><Button onClick={() => history.push("/user")}>Back to User list</Button></div>
                <h3>CREATE NEW USER</h3>
            </div>
            <UserForm onSubmit={onSubmit} defaultValues={{}}/>
        </div>
    );
}
