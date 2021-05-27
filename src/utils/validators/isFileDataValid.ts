export default function isFileDataValid(fileData: any) {
    if (fileData.user || fileData.time || fileData.file) {
        return true;
    } else {
        return false;
    }
}
