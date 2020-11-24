import React from 'react';
import {Body} from "./postItem.styles";
import {formatDate} from "../../utilities/miscellaneous";
import ReactMarkdown from "react-markdown";

const ResponseItem = ({author, content, createdAt, title}) => {

    function getFirstCharacterOfString(string) {
        return string.charAt(0);
    }

    function getProfileImage() {
        let initials = getFirstCharacterOfString(author.firstName);
        initials+= getFirstCharacterOfString(author.lastName);
        return  initials.toUpperCase();
    }

    return (
        <Body>
            <div className="userProfile">
                <div className="profilePicture">{getProfileImage()}</div>
            </div>
            <div className="header">
                <div className="title">{title}</div>
                <div className="postDetails">Comment by <span className={'important'}>{author.firstName} {author.lastName}</span> on {formatDate(createdAt)}</div>
            </div>
            <div className="content">
                <ReactMarkdown source={content}/>
            </div>
        </Body>
    );
};

export default ResponseItem;
