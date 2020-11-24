import React from 'react';
import PostListItem from "./postListItem";
import {StyledTable} from "../../styles/postList.styles";

const PostList = ({data}) => {

    return (
        <StyledTable>
            <thead>
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Replies</th>
                <th>Last update</th>
            </tr>
            </thead>
            <tbody>
            {data.map((listItem, index) => {
                return <PostListItem key={index} {...listItem}/>
            })}

            </tbody>
        </StyledTable>
    );
};

export default PostList;
