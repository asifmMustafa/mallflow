import React, { createContext, useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      let user = null;

      querySnapshot.forEach((doc) => {
        if (doc.data().password === password) {
          user = { id: doc.id, ...doc.data() };
        }
      });

      if (user) {
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
        return true;
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      // Handle login error, e.g., show a notification or an alert.
      return false;
    }
  };

  const signup = async (name, email, phone, password, userType) => {
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error("User with this email already exists");
      }

      const newUser = {
        name,
        email,
        phone,
        password,
        userType,
      };

      const docRef = await addDoc(collection(db, "users"), newUser);
      setCurrentUser({ id: docRef.id, ...newUser });
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ id: docRef.id, ...newUser })
      );
      return true;
    } catch (error) {
      console.error("Error signing up: ", error);
      // Handle signup error, e.g., show a notification or an alert.
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
