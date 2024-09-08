import { ref, push, onChildAdded, get } from "firebase/database";
import { database } from "../firebase";

export const sendMessage = async (path, data) => {
  await push(ref(database, path), data);
};

export const listenForMessages = (path, callback) => {
  onChildAdded(ref(database, path), (snapshot) => {
    callback(snapshot.val());
  });
};

export const getPublicKey = async (uid) => {
  const snapshot = await get(ref(database, `publicKeys/${uid}`));
  return snapshot.val();
};
