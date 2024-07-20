import React, { useState, useEffect } from "react";

const ProductReview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) {
          throw new Error("Products not found");
        }
        let data = await res.json();
        setProducts(data.slice(0,8));
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product w-full m-10">
      <h1 className="text-center text-4xl font-bold m-5">Product List</h1>
      <div className="flex flex-wrap gap-5 h-full">
        {products.map((product) => (
          <div key={product.id} className="h-[600px] w-[400px]  p-5 bg-white shadow-lg shadow-gray-700 cursor-pointer">
            <h2 className="text-2xl mb-4">{product.title}</h2>
            <div className="flex justify-center items-center h-[30%] m-5">
              <img src={product.image} alt={product.title} className="w-[150px] h-[200px]"  />
            </div>
            <div className="h-[60%] m-10">
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
