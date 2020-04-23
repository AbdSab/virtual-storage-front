import React from 'react';
import File from '../File'
import Folder from '../Folder'

const Content = ({path, content}) => {
    return Object.keys(content).length ? (
        <div className="flex">
            {path !== "" && <Folder path={path} back={true} />}
            {Object.keys(content.folders).map(folder => <Folder key={folder} path={path+"/"+folder}/>)}
            {content.files.map(file => <File key={file} name={file} />)}
        </div>
    ) : null;
}

export default Content;