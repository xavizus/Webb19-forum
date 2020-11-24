import React, {useEffect, useState} from 'react';
import {Body} from "./postItem.styles";
import {clearMessage, formatDate} from "../../utilities/miscellaneous";
import ReactMarkdown from "react-markdown";
import {replyForm} from "../form/formsData";
import FormGenerator from "../form/formGenerator";
import ResponseList from "./responseList";
import PostKit from "../../classes/postKit";
import {Reply} from "../../classes/structs";

const PostItem = ({id, author, title, createdAt, updatedAt, content, viewCount, countResponses, category, isPinned, isClosed, userSubscribed, responses}) => {

    const [message, setMessage] = useState(null);
    const [responseList, setResponseList] = useState(null);
    const [categoryData, setCategoryData] = useState(null);
    const form = replyForm();

    function getFirstCharacterOfString(string) {
        return string.charAt(0);
    }

    function getProfileImage() {
        let initials = getFirstCharacterOfString(author.firstName);
        initials+= getFirstCharacterOfString(author.lastName);
        return  initials.toUpperCase();
    }

    async function onSubmit(data) {
        const replyObject = new Reply(data.title, data.content, id);
        const result = await PostKit.postPostReply(replyObject);
        try {
            if(result.status !== 201) {
                setMessage({message: 'Could not post your reply', messageType: 'warning'});
                return;
            }
            let tempResponseList = responseList;
            tempResponseList.push(result.data);
            setResponseList(tempResponseList);
            setMessage({message: 'Successfully added your reply', messageType: 'success'})
            clearMessage(setMessage);
        } catch(error) {
            setMessage({message: error.message, messageType: 'error'});
        }
    }

    async function getCategory() {
        if(category && typeof category === "object") {
            return category.title;
        } else if(category) {
            const result = await PostKit.getCategories();
            let categoryItem = result.find(({id}) => id == category);
            return categoryItem.title;

        } else {
            return '';
        }
    }

    useEffect(async () => {;
        if(!responseList) {
            if(!responses) {
                let results = await PostKit.getRepliesForPost(id);
                setResponseList(results.data.results);
            } else {
                setResponseList(responses);
            }
        }
        if(!categoryData) {
            setCategoryData(await getCategory())
        }
    },[])

    return (
        <>
            <Body>
                <div className="userProfile">
                    <div className="profilePicture">{getProfileImage()}</div>
                    {userSubscribed && <i className="material-icons">star</i>}
                </div>
                <div className="header">
                    <div className="title">{title}</div>
                    <div className="postDetails">Posted by <span className={'important'}>{author.firstName} {author.lastName}</span> on {formatDate(createdAt)}, updated at {formatDate(updatedAt)}</div>
                </div>
                <div className="content">
                    <ReactMarkdown source={content}/>
                </div>
                <div className="postInfo">
                    Views: {viewCount}  Comments: {countResponses} Category: {categoryData && <>{categoryData}</>} {isPinned && <i className="material-icons">push_pin</i>} {isClosed && <i className="material-icons">block</i> }
                </div>
            </Body>
            {!isClosed && <FormGenerator message={message} setMessage={setMessage} orderedForm={form} submitEvent={onSubmit} />}
            {responseList && countResponses > 0 && <ResponseList responses={responseList}/>}
        </>
    );
};

export default PostItem;
