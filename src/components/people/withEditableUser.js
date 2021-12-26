import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
    return props => {
        const [orignalUser, setOrignalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setOrignalUser(response.data);
                setUser(response.data);
            })();
        }, []);

        const onChangeUser = changes => {
            setUser({ ...user, ...changes });
        }

        const onSaveUser = async() => {
            const response = await axios.post(`/users/${userId}`, { user });
            setOrignalUser(response.data);
            setUser(response.data);
        }

        const onResetUser = () => {
            setUser(orignalUser);
        }

        return <Component {...props} user={user} 
            onChangeUser={onChangeUser} 
            onSaveUser={onSaveUser} 
            onResetUser={onResetUser} />
    }
}