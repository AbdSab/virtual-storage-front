export default (path, content) => {
    if(path === "") return content
    const dirs = path.split("/");
    let folder = content;
    dirs.forEach(dir => {
        folder = dir !== "" ? folder.folders[dir] : folder;
    });
    return folder;
}