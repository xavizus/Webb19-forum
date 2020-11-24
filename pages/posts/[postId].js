import React, {useContext, useEffect, useState} from 'react';
import ProtectedRoute from "../../components/protectedRoute";
import {PostListContext} from "../../contexts/postList";
import PostKit from "../../classes/postKit";
import ReactMarkdown from "react-markdown";
import PostItem from "../../components/posts/postItem";

const PostView = ({postId, token}) => {

    const {postListData} = useContext(PostListContext);

    const [postItem, setPostItem] = useState(null);

    useEffect(async () => {
        try {
            if(postListData) {
                const result = postListData.find(postItem => postItem.id == postId);
                if(!result) throw new Error('Post not found');
                setPostItem(result);
            } else {
                const result = await PostKit.getSpecificPost(token, postId);
                setPostItem(result.data);
            }
        } catch(error) {

        }

    },[]);

    return (
        <div>
            {postItem &&
                <PostItem {...postItem}/>
            }
        </div>
    );
};

PostView.getInitialProps = (context) => {
    return {
        postId: context.query.postId
    }
}

export default ProtectedRoute(PostView);
