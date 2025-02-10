// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithCredential,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
import store from "../store";
import {
  login as handleLogin,
  logout as handleLogout,
} from "../store/authSlice";
import { openModal } from "../store/modalSlice";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  query,
  where,
  deleteDoc,
  orderBy,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { setTodos } from "../store/todoSlice";
import { setUserData } from "../utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("Kayıt başarıyla gerçekleşti, Girişe yönlendiriliyorsunuz.");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const reAuth = async (password) => {
  try {
    const credential = await EmailAuthProvider.credential(
      auth.currentUser.email,
      password
    );
    const { user } = await reauthenticateWithCredential(
      auth.currentUser,
      credential
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const update = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("Profil güncellendi");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const resetPassword = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
    toast.success("Parolanız güncellendi");
  } catch (error) {
    toast.error(error.message);
  }
};

export const emailVerification = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    toast.success(
      `Doğrulama maili ${auth.currentUser.email} adresine gönderildi, lütfen kontrol edin`
    );
  } catch (error) {
    toast.error(error.message);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    setUserData();

    onSnapshot(
      query(
        collection(db, "todos"),
        where("uid", "==", auth.currentUser.uid),
        orderBy("createdAt", "desc")
      ),
      (doc) => {
        store.dispatch(
          setTodos(
            doc.docs.reduce(
              (todos, todo) => {
                return [...todos, { ...todo.data(), id: todo.id }];
              },

              []
            )
          )
        );
      }
    );
  } else {
    store.dispatch(handleLogout());
  }
});

export const addTodo = async (data) => {
  try {
    data.createdAt = serverTimestamp();
    const res = await addDoc(collection(db, "todos"), data);
    return res.id;
  } catch (error) {
    toast.error(error.message);
  }
};
export const updateTodo = async (id, data) => {
  try {
    data.createdAt = serverTimestamp();
    const todoRef = doc(db, "todos", id);
    await updateDoc(todoRef, data);
    toast.success("Todo güncellendi");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
export const deleteTodo = async (id) => {
  try {
    await deleteDoc(doc(db, "todos", id));
  } catch (error) {
    toast.error(error.message);
  }
};
