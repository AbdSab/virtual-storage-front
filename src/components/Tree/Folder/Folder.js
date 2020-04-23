import React, { useState } from 'react';
import folderIcon from 'assets/imgs/icons/folder.png';
import Content from '../Content';
import { getFolderContent } from '../../../redux/explorer/actions';
import { useDispatch, useSelector } from 'react-redux';
import getContentFromPath from '../../../utils/getContentFromPath';

const Folder = ({path}) => {
    const dispatch = useDispatch();
    const {path:currentPath, content, status} = useSelector(state => state.explorer);

    const dir = path.split("/")
    const folderName = dir[dir.length-1] 

    const openFolder = () => {
        dispatch(getFolderContent(path));
    }

    const contentJsx = () => {
        const folderContent = getContentFromPath(path, content);
        let contentResult = null
        if(path === currentPath){
            if(status === 'success') contentResult = <Content path={path} content={folderContent} />;
            else if(status === 'fetching' && currentPath === path) contentResult = <div>Loading ...</div>;
        }
        else if(currentPath.includes(path)){
            contentResult = <Content path={path} content={folderContent} />;
        }
        return <div className="ml-4">{contentResult}</div>
    }

    
    return (
        <>
            <div className="flex items-center cursor-pointer hover:bg-gray-100" onClick={openFolder}><img className="w-4 h-4" src={folderIcon} alt="folder icon"/> {folderName}</div>
            {contentJsx()}
        </>
    )
}

export default Folder;