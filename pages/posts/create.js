import React, {useState} from 'react';
import ProtectedRoute from "../../components/protectedRoute";
import {postForm} from "../../components/form/formsData";
import FormGenerator from "../../components/form/formGenerator";
import PostKit from "../../classes/postKit";
import {Post} from "../../classes/structs";
import {clearMessage} from "../../utilities/miscellaneous";
import Router from "next/router";

const CreatePost = () => {

    const [message, setMessage] = useState(null);
    const form = postForm();

    async function onSubmit(data){
        const postObject = new Post(data.title, data.content, data.category);
        const result = await PostKit.postPost(postObject);
        try {
            if(result.status !== 201) {
                setMessage({message: 'Could not add your post', messageType: 'warning'});
                return;
            }
            setMessage({message: 'Successfully added your post', messageType: 'success'})
            clearMessage(setMessage, 2);
            setTimeout(() => {
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
