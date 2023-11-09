import { database } from "./firebaseSetup"
import { collection, addDoc } from "firebase/firestore";

// async
export async function writeToDB(goal){
    try{
        const docRef = await addDoc(collection(database, "goals"), goal);
        console.log("Document written with ID:", docRef.id);
    } catch (err){
        console.log(err);
    }
}

export async function deleteFromDB(id) {
    try {
      await deleteDoc(doc(database, "goals", id));
    } catch (err) {
      console.log(err);
    }
  }
    