"use client";
import React, { useEffect, useState } from "react";
import "./Products.css";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductsPopup from "./ProductsPopup";
import { baseUrl } from "@/config/Config";
import { fetchProducts } from "@/DAL/Fetch";
import ProductsSkeleton from "../SkeletonLoaders/ProductsSkeleton";
import { toast } from "react-toastify";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [Products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetchProducts();
        setProducts(res.Products);
      } catch (err) {
        toast.error("Error fetching industries:", err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <ProductsSkeleton />;
  }

  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="products-grid">
      {Products?.map((item) => (
        <div key={item.id} className="products-card">
          {/* Left Side (Image) */}
          <div className="left">
            <img className="pro-img" src={baseUrl + item.image} alt={item.name} />
          </div>

          {/* Right Side (Content) */}
          <div className="right">
            <h2>{item.name}</h2>
            {item.description && (
              <div className="desc"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            )}
            <button className="products-btn" onClick={() => handleOpen(item)}>
              Learn More <FaArrowRightLong />
            </button>
          </div>
        </div>
      ))}
      {/*  Show Popup if open */}
      {isOpen && (
        <ProductsPopup project={selectedProject} onClose={handleClose} />
      )}
    </div>
  );
};

export default Products;
