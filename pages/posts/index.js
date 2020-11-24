import React, {useContext, useEffect} from 'react';
import ProtectedRoute from '../../components/protectedRoute';
import PostKit from "../../classes/postKit";
import {PostListContext} from "../../contexts/postList";
import PostList from "../../components/posts/postList";
import {CategoriesContext} from "../../contexts/categories";
import {sortArrayByDate} from "../../utilities/miscellaneous";
import {PostListGrid} from "./posts.styled";


function Index({token}) {

    const {postListData, setPostListData} = useContext(PostListContext);
    const {categoryListData, setCategoryListData} = useContext(CategoriesContext);

    useEffect(async () => {
        if(!postListData || !categoryListData) {
            const postList = await PostKit.getPostList(token).then((result) => result.data.results);
            const categories = await PostKit.getCategories();
            const sortedPostList = sortArrayByDate(postList, 'updatedAt')
            setPostListData(sortedPostList)
            setCategoryListData(categories);
        }
    },[]);
    return (
        <div>
            <h1 className={'center'}>Latest posts</h1>
            <PostListGrid>
                {postListData && <PostList data={postListData}/>}
                {!postListData && <p>Loading data...</p>}
            </PostListGrid>
        </div>
    );
}
export default ProtectedRoute(Index);
