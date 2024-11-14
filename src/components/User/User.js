import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const { userId } = useParams();
    return (
        <div>
            User ID: {userId}
        </div>
    )
}

export default User;