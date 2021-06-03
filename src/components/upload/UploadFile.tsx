import React, { useState, useRef, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { useUser } from "../../firebase/useUser";
import initFirebase from "../../firebase/initFirebase";
import style from "../../styles/fileUpload.module.css";

initFirebase(); // Initialize firebase

const UploadFile = () => {
    const [postTitle, setPostTitle] = useState("");
    const [file, setFile] = useState<any>(null); // the file
    const fileUploadRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [message, setMessage] = useState<string>("");
    const { user } = useUser();
    const textareaRef = useRef(null);
    const [postDescription, setPostDescription] = useState<string>(""); // you can manage data with it
    const [descriptionError, setDescriptionError] = useState<string>("");
    const [titleError, setTitleError] = useState<string>("");
    const [fileError, setFileError] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [postDescription]);

    useEffect(() => {
        if (file) {
            setFileName(file.name);
            setFileError("");
        }
    }, [file]);
    const uploadFile = async () => {
        setMessage("Please wait uploading file...");
        // check if file is larger than 25 mb
        if (file.size < 25000001) {
            //ref for upliading file
            var storageRef = firebase
                .storage()
                .ref(
                    "test-org/posts/" +
                        user?.id.toString() +
                        "/" +
                        Math.random().toString() +
                        user?.id.toString() +
                        file.name
                );
            await storageRef.put(file); // upload file

            // ref for uploading post
            const postsRef = firebase
                .firestore()
                .collection("organizations")
                .doc("test-org")
                .collection(user.id.toString())
                .doc(user?.id.toString());

            postsRef.get().then(async (doc) => {
                const url = await storageRef.getDownloadURL();

                const postObj = {
                    user_id: user?.id,
                    posted_time: Date.now().toString(),
                    url: url,
                    title: postTitle,
                    description: postDescription,
                };

                if (doc.exists) {
                    // if the document has been created

                    let data = doc.data().posts;

                    data.push(postObj);

                    postsRef.update({
                        posts: data,
                    });
                } else {
                    //set new value to the document

                    postsRef
                        .set({
                            posts: [postObj],
                        })

                        .then()
                        .catch((error) => console.error(error));
                }
            });
        } else {
            //file is too big
            setMessage("File too big please choose a file smaller than 25 MB.");
        }

        setMessage("Completed!");
    };

    function validateData() {
        let validDescription = false;
        if (postDescription.length < 10) {
            setDescriptionError("Description must be at least 30 characters");
        } else if (postDescription.length > 1000) {
            setDescriptionError(
                "Description must be less than 1000 characters"
            );
        } else {
            validDescription = true;
        }

        let validFile = false;
        if (file) {
            validFile = true;
        } else {
            setFileError("Please choose a file");
        }

        if (postTitle.length < 10) {
            setTitleError("Title must be at least 10 characters");
        } else if (postTitle.length > 100) {
            setTitleError("Title must be less than 100 characters");
        } else {
            if (validDescription && validFile) {
                return true;
            }
        }

        return false;
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        if (validateData()) {
            uploadFile();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-12">
            <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3">
                    <label
                        className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                        htmlFor="grid-password"
                    >
                        File post title
                    </label>
                    <input
                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        onChange={(event) => setPostTitle(event.target.value)}
                        value={postTitle}
                        required
                    />
                    <p className="text-xs italic text-red-500">{titleError}</p>
                </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3">
                    <label
                        className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                        htmlFor="grid-password"
                    >
                        File description
                    </label>
                    <textarea
                        className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                        id="message"
                        onChange={(e) => {
                            setPostDescription(e.target.value);
                        }}
                        ref={textareaRef}
                        value={postDescription}
                    />
                    <p className="text-xs italic text-red-500">
                        {descriptionError}
                    </p>
                </div>
            </div>
            <div className="flex pb-3 font-sans text-center">
                <label className={style.customFileUpload}>
                    <input
                        type="file"
                        multiple
                        onChange={(event) => setFile(event.target.files[0])}
                        ref={fileUploadRef}
                        className={style.file}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 471.2 471.2"
                        version="1.1"
                        viewBox="0 0 471.2 471.2"
                        xmlSpace="preserve"
                        height="30px"
                        width="30px"
                        className="mx-auto"
                    >
                        <path d="M457.7 230.15c-7.5 0-13.5 6-13.5 13.5v122.8c0 33.4-27.2 60.5-60.5 60.5H87.5c-33.4 0-60.5-27.2-60.5-60.5v-124.8c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v124.8c0 48.3 39.3 87.5 87.5 87.5h296.2c48.3 0 87.5-39.3 87.5-87.5v-122.8c0-7.4-6-13.5-13.5-13.5z"></path>
                        <path d="M159.3 126.15l62.8-62.8v273.9c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V63.35l62.8 62.8c2.6 2.6 6.1 4 9.5 4 3.5 0 6.9-1.3 9.5-4 5.3-5.3 5.3-13.8 0-19.1l-85.8-85.8c-2.5-2.5-6-4-9.5-4-3.6 0-7 1.4-9.5 4l-85.8 85.8c-5.3 5.3-5.3 13.8 0 19.1 5.2 5.2 13.8 5.2 19 0z"></path>
                    </svg>
                    Choose File
                </label>
            </div>
            <p className="text-xs italic text-gray-500">{fileName}</p>
            <p className="text-xs italic text-red-500">{fileError}</p>
            <p className="pt-4 mt-0 mb-2 text-2xl font-normal leading-normal text-green-700">
                {message}
            </p>
            <button
                type="submit"
                className="px-4 py-2 font-semibold text-gray-700 bg-transparent border border-gray-500 rounded hover:bg-gray-300 hover:text-black"
            >
                Post File
            </button>
        </form>
    );
};
export default UploadFile;
