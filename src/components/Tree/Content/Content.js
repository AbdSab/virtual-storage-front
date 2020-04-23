import React from 'react';
import File from '../File'
import Folder from '../Folder'

const Content = ({path, content}) => {
    return (
        <div className="flex flex-col">
            {Object.keys(content.folders).map(folder => <Folder key={folder} path={path+"/"+folder}/>)}
            {content.files.map(file => <File key={file} name={file} />)}
        </div>
    );
}

export default Content;