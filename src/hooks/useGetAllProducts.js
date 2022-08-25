import { useEffect, useState } from "react";
import axios from "axios";

const useGetCategories = (API) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchCategories() {
      const response = await axios(API);
      setCategories(response.data);
      setIsLoading(false);
      console.log(response.data);
    }
    fetchCategories();
  }, []);
  return [categories, isLoading];
};

export default useGetCategories;