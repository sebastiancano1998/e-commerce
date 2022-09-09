import React from "react";
import useGetAllCategories from "../hooks/useGetAllCategories";

const AdminProductFilters = () => {
  const categories = useGetAllCategories()[0];
  const isLoading = useGetAllCategories()[1];

  return (
    <>
      {isLoading ? (
        <p>Skeleton..</p>
      ) : (
        <div className="flex justify-between my-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="categories">Categoria</label>
            <div className="w-40 bg-white">
              <select
                id="categories"
                name="categories"
                className="w-full outline-none p-2 rounded border"
              >
                <option value="" defaultValue="">
                  Elegir categoria
                </option>
                {categories?.map((category) => {
                  return (
                    <option
                      key={category.id}
                      data={category.id}
                      value={category.title}
                    >
                      {category.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="search">Producto</label>
            <input
              id="search"
              name="search"
              placeholder="Buscar producto"
              className="p-2 outline-none rounded border "
            ></input>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminProductFilters;
