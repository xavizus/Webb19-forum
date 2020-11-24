import React from 'react';
import {getAmountAgoFromDate, getLatestDate} from "../../utilities/miscellaneous";
import Link from "next/link";

const PostListItem = ({id, category, title, author, updatedAt, countResponses}) => {

    function lastUpdated() {
        return `${getAmountAgoFromDate(new Date(updatedAt))} · by ${author.firstName} ${author.lastName}`;
    }

    return (
        <>
        {author && <tr>
                <td> <Link href={`/posts/${id}`}>{title}</Link></td>
                <td>{category}</td>
                <td>{countResponses}</td>
                <td>{lastUpdated()}</td>
            </tr>
        }
        </>
    );
};

export default PostListItem;
