import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductGetApiByid } from "../../../Api/AllApi";
const Cakedetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const DetailsDataCall = async () => {
    try {
      const res = await ProductGetApiByid(id);
      if (res.status == 200) {
        setProduct(res.data.data);
      } else {
        setProduct({});
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  DetailsDataCall();
  //   const product = {
  //     pname: "Kasimir Charles",
  //     pprice: 222,
  //     pimage: "image-1767851363341-851540739download (1).jpg",
  //     pdes: "Eos modi obcaecati",
  //     brandName: "Olivia Parks",
  //     review: "Magni consectetur v",
  //     createdAt: "2026-01-08",
  //   };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            {product.pimage ? (
              <img
                src={`http://localhost:5000/uploads/${product.pimage}`}
                alt="Avatar Tailwind CSS Component"
                className="rounded-xl w-full max-h-[400px] object-cover shadow-md"
              />
            ) : (
              <img
                src="/nof.jpg"
                alt="Not Found"
                className="rounded-xl w-full max-h-[400px] object-cover shadow-md"
              />
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Brand: <span className="font-medium">{product.brandName}</span>
              </p>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.pname}
              </h1>

              <p className="text-2xl font-semibold text-indigo-600 mb-6">
                ${product.pprice}
              </p>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">{product.pdes}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  Review
                </h2>
                <p className="text-gray-600 italic">“{product.review}”</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
                Edit
              </button>
              <button className="flex-1 border text-amber-50 bg-red-600 border-red-600 hover:bg-indigo-50 hover:text-red-600 py-3 rounded-xl font-semibold transition">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t px-8 py-4 text-sm text-gray-500 flex justify-between">
          <span>Product ID {product._id}</span>
          <span>Added on {product.createdAt.split("T")[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default Cakedetails;
