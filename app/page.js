"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Card from "./components/cards";
import Spinner from "./components/Spinner";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-black text-white py-7">
      <div className="container mx-auto px-4 pb-10 h-screen*2">
        <h1 className="text-4xl font-bold my-8 pb-2">Products</h1>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Card
                  imgSrc={product.image}
                  title={product.title}
                  price={product.price}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
