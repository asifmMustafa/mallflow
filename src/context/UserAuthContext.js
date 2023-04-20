import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");

  async function signUp(name, email, password) {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(response.user, { displayName: name });
    return createUserFirestore(name, email);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    signOut(auth);
  }

  function createUserFirestore(name, email) {
    return addDoc(collection(db, "users"), {
      name,
      email,
    });
  }

  async function checkUserExist(email) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return true; // user exists
    } else {
      return false; // user does not exist
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
