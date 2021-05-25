import { NextApiRequest, NextApiResponse } from "next";
import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
import initFirebase from "../../firebase/initFirebase";
import isFileDataValid from "../../utils/validators/isFileDataValid";

initFirebase(); // Initialize firebase

const abortInternalError = (res: NextApiResponse, error: any) => {
    res.status(500);
    res.json({ error: error });
};
export default (req: NextApiRequest, res: NextApiResponse) => {
    if (isFileDataValid(req.body)) {
        const { file, user, time } = req.body;
        console.log(file, user, time);
        var storageRef = firebase
            .storage()
            .ref(`uploads/${user.id}/${file.name}`);
        var task = storageRef.put(file); // upload file
        task.on(
            "state_change",
            function errorHandler(error) {
                abortInternalError(res, error);
            },
            function complete() {
                res.status(200);
                res.json({
                    content: "Accepted the file!",
                    url: storageRef
                        .getDownloadURL()
                        .then((url) => url)
                        .catch((error) => abortInternalError(res, error)),
                });
            }
        );
    } else {
        res.status(400);
        res.json({
            content: "Bad Data (⩺_⩹)",
        });
    }
};
