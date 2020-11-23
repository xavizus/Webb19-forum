import React from 'react';
import PostListItem from "./postListItem";

const PostList = ({data}) => {
    return (
        <div>
            {data && data.map((listItem, index) => {
                return <PostListItem key={index} {...listItem}/>
            })}
        </div>
    );
};

export default PostList;
