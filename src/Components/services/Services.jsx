"use client";
import React, { useEffect, useState } from "react";
import "./Services.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { fetchAllServices } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import ServicesSkeleton from "../SkeletonLoaders/ServicesSkeleton";
import { toast } from "react-toastify";
const Services = () => {
  const router = useRouter();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = 1;
  const rowsPerPages = 10;
  // Fetch Services
  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await fetchAllServices(page, rowsPerPages);
        if (res?.services) {
          setServices(res.services);
        }
      } catch (error) {
        toast.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);
  if (loading) return <ServicesSkeleton count={rowsPerPages} />;
  return (
    <div className="services-grid">
      {services.map((item, index) => {
        return (
          <div className="servicecard" key={index}>
            <div className="overlay1">
              <div className="overlay2">
                <h3>{item.title}</h3>
                <p>{item.short_description}</p>
                <div
                  className="btn-showmore"
                  onClick={() => router.push(`/services/${item.slug}`)}
                >
                  Learn More <FaArrowRightLong />
                </div>
              </div>
            </div>
            <div className="searchicon">
              <img src={baseUrl + item.icon} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
