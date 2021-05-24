import { NextApiRequest, NextApiResponse } from "next";
import firebase from "firebase";
import "firebase/storage";
import initFirebase from "../../firebase/initFirebase";
import isFileDataValid from "../../utils/validators/isFileDataValid";

initFirebase(); // Initialize firebase

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (isFileDataValid(req.body())) {
        const { file, user, time } = req.body();
        const dummyUrl = "LOL";
        var storageRef = firebase.storage().ref("user_uploads/" + file.name);
        var task = storageRef.put(file); // upload file
        task.on(
            "state_change",
            function errorHandler(error) {
                res.status(500);
                res.json({ error: error });
            },
            function complete() {
                res.status(200);
                res.json({
                    content: "Accepted the file!",
                    url: dummyUrl,
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
