import FirebaseAuth from "../components/auth/FireBaseAuth";
import styles from "../styles/Home.module.css";
const Auth = () => {
    return (
        <div className={styles.container}>
            <FirebaseAuth />
        </div>
    );
};

export default Auth;
