import React from 'react';
import { useSelector } from 'react-redux';
import Content from './Content';

const Tree = () => {
    const {content, path} = useSelector(state => state.explorer)
    return (
        <div className="p-1">
            <h3 className="border-b">Path : {path || "/"}</h3>
            <Content path="" content={content} />
        </div>
    );
}

export default Tree;