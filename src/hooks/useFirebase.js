import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  //observer user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // useEffect(() => {
  //   fetch(`https://afternoon-springs-05594.herokuapp.com/users/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [user?.email]);

  const handleRegister = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser = { email, displayName: name };

        setUser(newUser);
        history.replace("/");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const handleEmailLogin = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    console.log("logout");

    return signOut(auth);
  };

  const loginWithFacebook = () => {
    signInWithPopup(auth, FacebookAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    authError,
    setUser,
    signInWithGoogle,
    loginWithFacebook,
    isLoading,
    setIsLoading,
    handleRegister,
    handleEmailLogin,
    logOut,
  };
};

export default useFirebase;
