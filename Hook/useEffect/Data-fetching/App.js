import React from 'react';
import { useState } from 'react';

import UserPosts from './UserPosts';


function App() {

    const [userId, setUserId] = useState('');

    const changeUserId = (e) => setUserId(e.target.value);

    return (

        <>
            <input
                type="text"
                placeholder="enter user's id "
                onChange={changeUserId}
            />

                <UserPosts userId={userId} />
        </>


    )

}

export default App; 