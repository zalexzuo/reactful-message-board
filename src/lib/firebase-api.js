import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";

const postsCollectionRef = collection(db, "posts");

export const getAllPosts = async () => {
  const responseData = await getDocs(postsCollectionRef);

  const dataArray = responseData.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArray;
};

export const getMyPosts = async (email) => {
  const myPostsQuery = query(postsCollectionRef, where("email", "==", email));
  const responseData = await getDocs(myPostsQuery);
  const dataArray = responseData.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArray;
};

export const getSinglePost = async (postId) => {
  const postsQuery = query(postsCollectionRef, where("postid", "==", postId));
  const responseData = await getDocs(postsQuery);
  const dataArray = responseData.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArray[0];
};

export const addPost = async (postObj) => {
  const docRef = doc(postsCollectionRef);
  postObj.postid = docRef.id;
  await setDoc(docRef, postObj);
  //await addDoc(postsCollectionRef, postObj);
};

export const editSinglePost = async (postObj) => {
  try {
    const updateDocRef = doc(db, "posts", postObj.postid);
    await setDoc(updateDocRef, postObj, { merge: true });
  } catch {
    alert("something went wrong... please try again later!");
  }
};

// *** remember to set modifieddate
export const updatePost = async (postId, postObj) => {
  const postDoc = doc(db, "posts", postId);
  await updateDoc(postDoc, postObj);
};

export const deletePost = async (postId) => {
  console.log(postId);
  const postDoc = doc(db, "posts", postId);
  await deleteDoc(postDoc);
};
