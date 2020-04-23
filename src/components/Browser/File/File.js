import React from 'react';
import classnames from 'classnames';
import imageIcon from 'assets/imgs/icons/image.png';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '../../../redux/folder/actions';

const File = ({name}) => {
    const dispatch = useDispatch();
    const isSelected = useSelector(state => state.folder.selections[name]);
    const selectFile = () => {
        dispatch(setSelected(name));
    }
    return (
        <div name={name} className={classnames("flex flex-col items-center cursor-pointer hover:bg-gray-300 m-2 p-2", isSelected && 'bg-gray-300')} onClick={selectFile} onContextMenu={selectFile}>
            <img className="w-16 h-16" src={imageIcon} alt="folder icon"/>
            {name}
        </div>
    );
}

export default File;