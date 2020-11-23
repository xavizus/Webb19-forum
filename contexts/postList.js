import React, {createContext, useState} from 'react';

export const PostListContext = createContext(null);

const PostListProvider = ({children}) => {
    const [postListData, setPostListData] = useState(null);

    return (
        <PostListContext.Provider value={{postListData, setPostListData}}>
            {children}
        </PostListContext.Provider>);
};

export default PostListProvider;