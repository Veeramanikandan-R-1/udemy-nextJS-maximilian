import React from "react";

const ProductPage = async ({ params }) => {
  params = await params;
  console.log(params);
  return (
    <>
      <div>cate: {params.category}</div>
      <div>id: {params.id}</div>
    </>
  );
};

export default ProductPage;
