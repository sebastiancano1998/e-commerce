import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebase.config";

const useGetAllCategories = () =>{
  const [categories, setCategories] = useState([]); 
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function getAllCategories() {
      const snapshot = await getDocs(collection(database, "category"));  
      snapshot.docs.forEach((doc) => {
        setCategories((prev) => {
          return [...prev, { id: doc.id, title: doc.data().title }]; //aca almacenamos todas los docs en el estado categorias
        });
      });
      setIsLoading(false)
    }
    getAllCategories();
  }, []);
  return [categories, isLoading]
}

export default useGetAllCategories;