import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryHero from "../../components/website/product/CategoryHero";
import ProductListByCat from "../../components/website/product/ProductListByCat";

const ProductList = () => {
  const { slug, catname, subcat } = useParams();
  console.log(`${slug}, ${catname}, ${subcat}`);

  return (
    <>
      <CategoryHero catSlug={{ catname: catname, subcat: subcat }} />

      <ProductListByCat catSlug={{ catname: catname, subcat: subcat }} />
    </>
  );
};

export default ProductList;
