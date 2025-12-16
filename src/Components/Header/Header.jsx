"use client";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import ServicesDropDown from "../DropDowns/ServicesDropDown";
import { usePathname, useRouter } from "next/navigation";
import { fetchDropDownServices } from "@/DAL/Fetch";
import { toast } from "react-toastify";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [showDropdown, setShowDropdown] = useState(false); // desktop dropdown
  const [mobileMenu, setMobileMenu] = useState(false); // mobile nav
  // Add these states
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [services, setServices] = useState([]);

  const visibleDropdown = () => setShowDropdown(true);
  const hidedropdown = () => setShowDropdown(false);

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await fetchDropDownServices();

        const fetchedServices = Array.isArray(res?.services)
          ? res.services.map((service) => ({
              name: service.title,
              slug: service.slug,
              menuImage: service.menuImg,
              items: Array.isArray(service.subServices?.items)
                ? service.subServices.items.map((sub) => ({
                    name: sub.title,
                    slug: sub.slug,
                  }))
                : [],
            }))
          : [];

        setServices(fetchedServices);
      } catch (error) {
        toast.error("Failed to fetch services:", error);
        setServices([]);
      }
    };

    getServices();
  }, []);

  return (
    <div className="main-wrapper-fixed-width">
      <div className="header-area">
        <img
          src="/zemalt-logo.webp"
          onClick={() => router.push("/")}
          alt="Zemalt.com"
        />

        {/* Desktop Nav */}
        <ul>
          <li
            className={pathname === "/" ? "active" : ""}
            onClick={() => router.push("/")}
          >
            Home
          </li>

          <li
            className={pathname.startsWith("/services") ? "active" : ""}
            onClick={() => router.push("/services")}
            onMouseEnter={visibleDropdown}
            onMouseLeave={hidedropdown}
          >
            Services <FaAngleDown />
          </li>
          <li
            className={pathname === "/products" ? "active" : ""}
            onClick={() => router.push("/products")}
          >
            Our Products
          </li>

          <li
            className={pathname === "/case-study" ? "active" : ""}
            onClick={() => router.push("/case-study")}
          >
            Case Studies
          </li>

          <li
            className={pathname === "/industries" ? "active" : ""}
            onClick={() => router.push("/industries")}
          >
            Industries We Serve
          </li>
          <li
            className={pathname === "/portfolio" ? "active" : ""}
            onClick={() => router.push("/portfolio")}
          >
            Portfolio
          </li>

          <li
            className={pathname === "/blog" ? "active" : ""}
            onClick={() => router.push("/blog")}
          >
            Blogs
          </li>
        </ul>

        <button onClick={() => router.push("/contact")}>Get Started</button>

        {/* Hamburger / Cross */}
        {mobileMenu ? (
          <FaTimes className="menu-icon" onClick={() => setMobileMenu(false)} />
        ) : (
          <GiHamburgerMenu
            className="menu-icon"
            onClick={() => setMobileMenu(true)}
          />
        )}
      </div>

      {/* Desktop Services Dropdown */}
      {showDropdown && (
        <>
          {/* BLUR OVERLAY */}
          <div className="dropdown-overlay" onMouseEnter={hidedropdown} />

          {/* DROPDOWN */}
          <div className="maindropdown-area">
            <div className="maindropdown-area-flex">
              {/* LEFT CLOSE ZONE */}
              <div className="left" onMouseEnter={hidedropdown} />

              {/* CENTER (SAFE ZONE) */}
              <div className="center" onMouseEnter={visibleDropdown}>
                <ServicesDropDown services={services} onClose={hidedropdown} />
              </div>

              {/* RIGHT CLOSE ZONE */}
              <div className="right" onMouseEnter={hidedropdown} />
            </div>
          </div>
        </>
      )}

      {/* Mobile Nav */}
      <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
        <ul>
          <li
            className={pathname === "/" ? "active" : ""}
            onClick={() => {
              router.push("/");
              setMobileMenu(false);
            }}
          >
            Home
          </li>
          {/* Main Services */}
          {/* ================= MOBILE SERVICES ================= */}
          <li>
            <div className="mobile-services-row">
              {/* MAIN SERVICES LINK */}
              <span
                className={`mobile-link ${
                  pathname.startsWith("/services") ? "active" : ""
                }`}
                onClick={() => {
                  router.push("/services");
                  setMobileMenu(false);
                }}
              >
                Services
              </span>

              <FaAngleDown
                className="expand-icon"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              />
            </div>

            {/* MAIN SERVICES LIST */}
            {isServicesOpen && (
              <ul className="mobile-submenu">
                {services.map((service, idx) => {
                  const isServiceActive =
                    pathname === `/services/${service.slug}` ||
                    pathname.startsWith(`/services/${service.slug}/`);

                  return (
                    <li key={idx}>
                      <div className="mobile-services-row">
                        {/* MAIN SERVICE */}
                        <span
                          className={`mobile-link ${
                            isServiceActive ? "active" : ""
                          }`}
                          onClick={() => {
                            router.push(`/services/${service.slug}`);
                            setMobileMenu(false);
                          }}
                        >
                          {service.name}
                        </span>

                        <FaAngleDown
                          className="expand-icon"
                          onClick={() =>
                            setActiveService((prev) =>
                              prev === service.slug ? null : service.slug
                            )
                          }
                        />
                      </div>

                      {/* SUB SERVICES */}
                      {activeService === service.slug && (
                        <ul className="mobile-submenu">
                          {service.items.map((sub, subIdx) => {
                            const isSubActive =
                              pathname ===
                              `/services/${service.slug}/${sub.slug}`;

                            return (
                              <li
                                key={subIdx}
                                className={isSubActive ? "active" : ""}
                                onClick={() => {
                                  router.push(
                                    `/services/${service.slug}/${sub.slug}`
                                  );
                                  setMobileMenu(false);
                                }}
                              >
                                {sub.name}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          {/* ================= END MOBILE SERVICES ================= */}

          <li
            className={pathname === "/products" ? "active" : ""}
            onClick={() => {
              router.push("/products");
              setMobileMenu(false);
            }}
          >
            Our Products
          </li>

          {/* Other menu items */}
          <li
            className={pathname === "/case-study" ? "active" : ""}
            onClick={() => {
              router.push("/case-study");
              setMobileMenu(false);
            }}
          >
            Case Studies
          </li>
          <li
            className={pathname === "/industries" ? "active" : ""}
            onClick={() => {
              router.push("/industries");
              setMobileMenu(false);
            }}
          >
            Industries We Serve
          </li>
          <li
            className={pathname === "/portfolio" ? "active" : ""}
            onClick={() => {
              router.push("/portfolio");
              setMobileMenu(false);
            }}
          >
            Portfolio
          </li>
          <li
            className={pathname === "/blog" ? "active" : ""}
            onClick={() => {
              router.push("/blog");
              setMobileMenu(false);
            }}
          >
            Blogs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
