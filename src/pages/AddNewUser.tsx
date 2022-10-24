import * as React from 'react';
import UserForm from '../component/UserForm';

export interface IAddNewUserProps {
}

export function AddNewUser(props: IAddNewUserProps) {
    const onSubmit = (e: any) => {
        console.log(e);

    }
    return (
        <div>
            <UserForm onSubmit={onSubmit} />
        </div>
    );
}
