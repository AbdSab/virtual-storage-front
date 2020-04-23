import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_EXPLORER_BASE_URL;

export const LIST_FOLDER = "/list/:path";
export const CREATE_FOLDER = "/create/:path";
export const UPLOAD_FILE = '/upload/';

const explorerFetch = axios.create({
    baseURL: BASE_URL,
});

export const listFolderApi = async path => {
    if(path.charAt(0) === "/") path = path.slice(1);
    const { data } = await explorerFetch.get(LIST_FOLDER.replace(":path", path));
    return data;
}

export const createFolderApi = async path => {
    if(path.charAt(0) === "/") path = path.slice(1);
    const { data } = await explorerFetch.get(CREATE_FOLDER.replace(":path", path));
    return data;
}

export const uploadFileApi = async files => {
    const { data } = await explorerFetch.post(UPLOAD_FILE, {files});
    return data;
}