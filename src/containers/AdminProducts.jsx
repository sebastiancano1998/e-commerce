import React from "react";
import AdminProductFilters from "../components/AdminProductFilters";
import AdminProductsTable from "./AdminProductsTable";

const AdminProducts = () => {

  return (
    <>
      <div className="flex  flex-col">
        <div className="flex flex-col">
          <AdminProductFilters></AdminProductFilters>
          <AdminProductsTable  ></AdminProductsTable>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
