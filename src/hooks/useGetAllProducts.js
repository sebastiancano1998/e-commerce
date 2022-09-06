import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebase.config";


const useGetAllProducts= () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getAllProducts() {
      const querySnapshot = await getDocs(collection(database,"products"));
      querySnapshot.forEach((doc)=>{
        setProducts((prev)=>{
          return [...prev, doc.data()]
        })
      });
      setIsLoading(false)
    }
    getAllProducts();
  }, []);
  return [products, isLoading];
};

export default useGetAllProducts;