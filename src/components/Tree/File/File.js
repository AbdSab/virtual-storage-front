import React from 'react';
import imageIcon from 'assets/imgs/icons/image.png';

const File = ({name}) => {
    return (
        <>
            <div className="flex items-center cursor-pointer hover:bg-gray-100"><img className="w-4 h-4" src={imageIcon} alt="folder icon"/> {name}</div>
        </>
    )
}

export default File;