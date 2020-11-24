import React, {useContext, useEffect} from 'react';
import {StyledNavbar} from "./navbar.styles";
import Link from "next/link";
import {MeContext} from "../contexts/me";
import UserKit from '../classes/userKit';

const Navbar = ({token}) => {

    const {meData, setMeData} = useContext(MeContext);

    useEffect(async () => {
        if(!meData) {
            const result = await UserKit.getCurrentUser(token);
            setMeData(result.data);
        }
    },[]);
    return (
        <StyledNavbar>
            <div className="item start">
                <Link href={'/'}>Home</Link>
            </div>
            <div className="item">
                <Link href={'/posts'}>Posts</Link>
            </div>
            <div className="item">
                <Link href={'/posts/create'}>Create Post</Link>
            </div>
            <div className="item user">
                {meData && <p>{`${meData.firstName} ${meData.lastName}`} <span className={'arrowDown'}></span></p>}

            </div>
        </StyledNavbar>
    );
};

export default Navbar;
