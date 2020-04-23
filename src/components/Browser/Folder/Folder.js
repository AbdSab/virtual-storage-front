import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import { getFolderContent } from '../../../redux/explorer/actions';
import { setSelected } from '../../../redux/folder/actions';

import folderIcon from 'assets/imgs/icons/folder.png';

const Folder = ({path, back}) => {
    const dispatch = useDispatch();

    const isSelected = useSelector(state => state.folder.selections[path])

    const dir = path.split("/")
    const folderName = dir[dir.length-1]
    path = back ? dir.slice(0,-1).join("/") : path

    const openFolder = () => {
        dispatch(getFolderContent(path));
    }

    const selectFolder = () => {
        !back && dispatch(setSelected(path));
    }

    return (
        <div name={path} className={classnames("flex flex-col items-center cursor-pointer hover:bg-gray-300 m-2 p-2", isSelected && 'bg-gray-300')} onClick={selectFolder} onContextMenu={selectFolder} onDoubleClick={openFolder}>
            <img className="w-16 h-16" src={folderIcon} alt="folder icon"/>
            {back ? ".." : folderName}
        </div>
    );
}

export default Folder;