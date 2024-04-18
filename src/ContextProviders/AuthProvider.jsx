import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create a new user form firebase....................!
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signIn a new user form firebase....................!
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signOut a user form firebase.......................!
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //update user profile................!
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //on state change on a user..........................!
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      if(currentUser){
        //get token and store client side............!
        const userInfo = { email: currentUser.email };
        axios.post('/jwt', userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
        });
      }else{
        //do some thing.......!
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  //send info and data form components.......................!
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
