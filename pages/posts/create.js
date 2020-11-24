import React, {useContext, useState} from 'react';
import ProtectedRoute from "../../components/protectedRoute";
import {postForm} from "../../components/form/formsData";
import FormGenerator from "../../components/form/formGenerator";
import PostKit from "../../classes/postKit";
import {Post} from "../../classes/structs";
import {clearMessage} from "../../utilities/miscellaneous";
import Router from "next/router";
import {PostListContext} from "../../contexts/postList";

const CreatePost = () => {

    const {setPostListData} = useContext(PostListContext);
    const [message, setMessage] = useState(null);
    const form = postForm();

    async function onSubmit(data){
        const postObject = new Post(data.title, data.content, data.category);
        try {
            const result = await PostKit.postPost(postObject);
            if(result.status !== 201) {
                setMessage({message: 'Could not add your post', messageType: 'warning'});
                return;
            }
            setMessage({message: 'Successfully added your post', messageType: 'success'})
            clearMessage(setMessage, 2);
            setTimeout(() => {
                setPostListData(null);
                Router.push('/posts');
            }, 2*1000)
        } catch(error) {
            setMessage({message: error.message, messageType: 'error'});
        }
    }

    return (
        <div>
            <FormGenerator orderedForm={form} message={message} setMessage={setMessage} submitEvent={onSubmit}/>
        </div>
    );
};

export default ProtectedRoute(CreatePost);
