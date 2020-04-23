import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { pressKey, releaseKey } from "../redux/folder/actions";

const useKeysActions = () => {
    const dispatch = useDispatch();

    const handleKeyPress = e => {
        dispatch(pressKey(e.key));
    }

    const handleKeyRelease = e => {
        dispatch(releaseKey(e.key));
    }

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyPress);
        window.addEventListener("keyup", handleKeyRelease);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
            window.removeEventListener("keyrelease", handleKeyRelease);
        }
    }, []);
}

export default useKeysActions;