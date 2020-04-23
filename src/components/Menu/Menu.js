import React, { useState, useEffect, useCallback } from 'react';
import MenuContent from './MenuContent';

const Menu = () => {
    const [data, setData] = useState({isOpen:false});
    const openMenu = useCallback(e=>{
        e.preventDefault();
        setData({
            isOpen:true,
            target:e.path,
            x:e.clientX,
            y:e.clientY,
        });
    },[data]);

    const closeMenu = useCallback(e=>{
        setData({
            isOpen:false,
        });
    }, [data])

    useEffect(()=>{
        document.addEventListener("contextmenu",openMenu);
        document.addEventListener("click",closeMenu);
        return () => {
            document.removeEventListener("contextmenu",openMenu)
            document.removeEventListener("click",closeMenu);
        }
    }, [openMenu]);

    return data.isOpen ? (
        <div style={{position:'fixed', top:data.y, left:data.x}}><MenuContent target={data.target}/></div>
    ):null;
}

export default Menu;