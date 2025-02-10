import { auth } from "./firebase";
import store from "./store";
import { login } from "./store/authSlice";
import { closeModal, openModal } from "./store/modalSlice";

export const modalClose = () => {
  store.dispatch(closeModal());
};
export const modal = (name, data = false) => {
  store.dispatch(
    openModal({
      name,
      data,
    })
  );
};

export const setUserData = () => {
  store.dispatch(
    login({
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      emailVerification: auth.currentUser.emailVerified,
      photoURL: auth.currentUser.photoURL,
      uid: auth.currentUser.uid,
    })
  );
};
