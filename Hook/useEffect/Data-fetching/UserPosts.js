import { useState, useEffect } from 'react';
import React from 'react';


function UserPosts({ userId }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        console.log('goi api');

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(posts => {
                const postById = posts.filter((post) => { return post.userId == userId })
                setPosts(postById);
                // setPosts(posts)
            })
    }
        , [userId])

    return (

        <div>
            {posts.map((post) => {
                return (
                    <ul>
                        <li>User's Id : {post.userId}</li>
                        <li>Id : {post.id}</li>
                        <li>Title : {post.title}</li>
                        <li>Body : {post.body}</li>
                    </ul>
                )
            }

            )}
        </div>

    )


}

export default UserPosts; 