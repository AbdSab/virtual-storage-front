import React from 'react';

const MenuContent = ({target}) => {
    const file = target.find((elm) => elm.attributes && elm.attributes.name);
    return (
        <div className="bg-white border shadow-md" style={{minWidth:100}}>
            <div className="p-1 hover:bg-gray-200 cursor-pointer border-b">Copy</div>
            <div className="p-1 hover:bg-gray-200 cursor-pointer border-b">Paste</div>
            <div className="p-1 hover:bg-gray-200 cursor-pointer">Select All</div>
        </div>
    );
}

export default MenuContent;