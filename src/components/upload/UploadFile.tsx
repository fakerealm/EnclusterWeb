import React, { useState, useRef } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { useUser } from "../../firebase/useUser";
import initFirebase from "../../firebase/initFirebase";

initFirebase(); // Initialize firebase

export default () => {
    const [content, setContent] = useState("");
    const [file, setFile] = useState<any>(null); // the file
    const fileUploadRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [message, setMessage] = useState<string>("");
    const { user } = useUser();
    const uploadFile = async () => {
        setMessage("Please wait uploading file...");
        // check if file is larger than 25 mb
        if (file.size < 25000001) {
            //ref for upliading file
            var storageRef = firebase
                .storage()
                .ref(
                    "posts/" +
                        user?.id.toString() +
                        "/" +
                        Math.random().toString() +
                        user?.id.toString() +
                        file.name
                );
            await storageRef.put(file); // upload file

            // ref for uplaoding post
            const postsRef = firebase
                .firestore()
                .collection("posts")
                .doc(user?.id?.toString());
            firebase
                .firestore()
                .collection("posts")
                .doc(user?.id.toString())
                .get()
                .then(async (doc) => {
                    const url = await storageRef.getDownloadURL();
                    if (doc.exists) {
                        // if the document has been created
                        // @ts-ignore: Object is possibly 'null'.
                        let data = doc.data().posts;
                        data.push({
                            user_id: user?.id,
                            posted_time: Date.now().toString(),
                            url: url,
                        });
                        console.log(data);
                        postsRef.update({
                            posts: data,
                        });
                    } else {
                        postsRef
                            .set({
                                posts: [
                                    {
                                        user_id: user?.id,
                                        posted_time: Date.now().toString(),
                                        url: url,
                                    },
                                ],
                            })
                            .then()
                            .catch((error) => console.error(error));
                    }
                });
        } else {
            setMessage("File too big please choose a file smaller than 25 MB.");
        }
        setMessage("Completed!");
    };

    function handleSubmit(event: any) {
        // calls uploadFile
        event.preventDefault();
        uploadFile();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Post Content"
                onChange={(event) => setContent(event.target.value)}
                value={content}
            />
            <input
                type="file"
                // @ts-ignore: Object is possibly 'null'.

                onChange={(event) => setFile(event.target.files[0])}
                /* Without @ts-ignore there was some bug or another,
                 * it isn't the best practice to use @ts-ignore but conditionals didn't work.
                 */
                ref={fileUploadRef}
            />
            <p>{message}</p>
            <button type="submit">Submit Form</button>
        </form>
    );
};
