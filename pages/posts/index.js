import React, {useContext, useEffect} from 'react';
import ProtectedRoute from '../../components/protectedRoute';
import PostKit from "../../classes/postKit";
import {PostListContext} from "../../contexts/postList";


function Index({data}) {

    const {postListData, setPostListData} = useContext(PostListContext);
    useEffect(() => {
        setPostListData(data);
    },[]);
    return (
        <div>
            <h1>Post list!</h1>
            {postListData && postListData.map((element, index) => {
                return <div key={index}>{element.title}</div>
            })}
        </div>
    );
}

Index.getInitialProps = async (context) => {
    let response = await PostKit.getPostList(context.token);
    return {
        data: response.data.results
    }

}
export default ProtectedRoute(Index);
