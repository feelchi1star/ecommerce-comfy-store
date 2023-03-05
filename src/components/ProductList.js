import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view: grid } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry no products match you search...
      </h5>
    );
  }
  if (grid) {
    return <GridView products={products}></GridView>;
  }

  return <ListView products={products} />;
};

export default ProductList;
