import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { Upload } from "./Upload.js";
import { Post } from "./Post.js";

import { useAuth } from "../../context/AuthProvider";

import { db } from "../../config/firebase.js";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  updateDoc,
  onSnapshot,
  orderBy,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export const Main = () => {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useAuth();

  const collectionRef = collection(db, "posts");

  const qRef = query(collectionRef, orderBy("createdAt", "desc"));

  useEffect(() => {
    const unsubscribe = onSnapshot(qRef, (snapShot) => {
      const newData = snapShot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setPosts(newData);
    });

    return () => unsubscribe();
  }, []);
  console.log(posts);
  async function deletePost(id) {
    try {
      const docRef = doc(db, "posts", id);
      let postData = await getDoc(docRef);
      let { authorId } = postData.data();

      if (!(currentUser.uid === authorId)) {
        console.log("Can't delete this");
        return;
      }
      await deleteDoc(docRef);
    } catch (e) {
      console.log(e);
    }
  }

  async function addPost(newPost) {
    let addedPost = await addDoc(collectionRef, newPost);
  }

  async function impressionHandler(id, isLiked) {
    const docRef = doc(db, "posts", id);
    const likeRef = doc(db, "posts", id, "liked", currentUser.uid);
    const post = posts.find((po) => po.id == id);
    let promiseArray = [];

    if (isLiked) {
      promiseArray.push(deleteDoc(likeRef));
      promiseArray.push(
        updateDoc(docRef, { impressions: post.impressions - 1 })
      );
    } else {
      promiseArray.push(
        setDoc(likeRef, {
          currentTime: serverTimestamp(),
        })
      );
      promiseArray.push(
        updateDoc(docRef, { impressions: post.impressions + 1 })
      );
    }
    await Promise.all(promiseArray);
  }

  // ** might get deleted
  // async function removeImpression(id) {
  //   const docRef = doc(db, "posts", id);
  //   const likeRef = doc(db, "posts", id, "liked", currentUser.uid);
  //   const post = posts.find((po) => po.id == id);
  //   await Promise.all(
  //     [deleteDoc(likeRef)],
  //     [updateDoc(docRef, { impressions: post.impressions - 1 })]
  //   );
  // }

  // async function addImpressions(id) {
  //   const docRef = doc(db, "posts", id);

  //   let document = doc(db, "posts", id, "liked", currentUser.uid);
  //   const post = posts.find((po) => po.id == id);
  //   await Promise.all([
  //     setDoc(document, {
  //       currentTime: serverTimestamp(),
  //     }),
  //     updateDoc(docRef, { impressions: post.impressions + 1 }),
  //   ]);
  // }

  //** */

  return (
    <main className="main">
      <Upload newPostHandler={addPost} />
      {posts.length < 1 ? (
        <div style={{ color: "white", fontSize: "30px" }}> Cargando ...</div>
      ) : (
        <Post
          postContent={posts}
          postDeleteHandler={deletePost}
          postImpressionsHandler={impressionHandler}
        />
      )}
    </main>
  );
};
