import UploadFiles from "../components/upload/UploadFile";

UploadFiles;
export default function upload() {
    return (
        <>
            <div>
                <h1 className="pt-4 pl-12 mt-0 mb-2 text-4xl font-normal text-gray-800">
                    Upload a file
                </h1>
            </div>
            <UploadFiles />
        </>
    );
}
