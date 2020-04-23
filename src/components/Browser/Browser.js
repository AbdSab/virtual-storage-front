import React from 'react';
import { useSelector } from 'react-redux';
import Content from './Content';
import getContentFromPath from '../../utils/getContentFromPath';

const Browser = () => {
    const [path,content] = useSelector(state => {
        const {content, path} = state.explorer;
        return [path, getContentFromPath(path, content)];
    });

    return (
        <div className="p-1">
            <Content path={path} content={content} />
        </div>
    );
}

export default Browser;