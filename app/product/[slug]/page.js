"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.slug}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="my-40 mx-auto">
          <Spinner />
      </div>
    );
  }

  if (!product) {
    return <div className="container mx-auto p-8">Error loading product.</div>;
  }

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-2/3 object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-green-600 mb-4">${product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          Category: {product.category}
        </p>
        
      </div>
    </div>
  );
}
