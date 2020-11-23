import React, {useContext, useEffect} from 'react';
import ProtectedRoute from '../../components/protectedRoute';
import PostKit from "../../classes/postKit";
import {PostListContext} from "../../contexts/postList";
import PostList from "../../components/posts/postList";
import {CategoriesContext} from "../../contexts/categories";


function Index({postList, categories}) {

    const {postListData, setPostListData} = useContext(PostListContext);
    const {categoryListData, setCategoryListData} = useContext(CategoriesContext);

    useEffect(() => {
        setPostListData(postList);
        setCategoryListData(categories);
    },[]);
    return (
        <div>
            <h1>Forum!!</h1>
            <PostList data={postListData}/>
        </div>
    );
}

Index.getInitialProps = async (context) => {
    const responsePostList = await PostKit.getPostList(context.token);
    const responseCategories = await PostKit.getCategories(context.token);
    return {
        postList: responsePostList.data.results,
        categories: responseCategories.data.results
    }

}
export default ProtectedRoute(Index);
