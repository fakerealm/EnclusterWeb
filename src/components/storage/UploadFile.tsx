// import router from "next/router";
import React, { useState, useRef } from "react";
import firebase from 'firebase'
import 'firebase/storage'
import initFirebase from "../../firebase/initFirebase";

initFirebase();// Initialize firebase

export default function CreatePost() {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<any>(null);// the file
  const fileUploadRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [showProgress, setShowProgress] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('');
  const [value, setValue] = useState<number>(0)

  function uploadFile() {
    setShowProgress(true)// Shows progress bar
    setMessage('Please wait processing file...')
    if (file.size < 25000001) {// check if file is larger than 25 mb
      var storageRef = firebase.storage().ref('user_uploads/' + file.name)
      var task = storageRef.put(file)// upload file
      task.on('state_change', function progress(snapshot) {// Progress change in uploading file
        setValue((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },
        function errorHandler(error) {// incase of error
          setMessage(error.message)
          setShowProgress(false)
        },
        function complete() {// in case of succesful completion
          setMessage('Completed!')
          setShowProgress(false)
          // router.push("/success")
        })
    } else {
      setMessage('File too big please choose a file smaller than 25 MB.')
      setShowProgress(false)
    }
  }

  function handleSubmit(event: any) {// calls uploadFile
    uploadFile()
    event.preventDefault();
    console.log(content)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={event => setContent(event.target.value)}
          value={content}
        />
        <input
          type="file"
          // @ts-ignore: Object is possibly 'null'.
          onChange={event => setFile(event.target.files[0])}
          /* Without @ts-ignore there was some bug or another,
          * it isn't the best practice to use @ts-ignore but conditionals didn't work.
          */
          ref={fileUploadRef}
        />
        <p>{message}</p>
        {showProgress ?
          <><progress value={value} max="100" /><br /></> : <></>}

        <button type="submit">Submit Form</button>
      </form>
    </div>
  )
};