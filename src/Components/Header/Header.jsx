"use client";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import ServicesDropDown from "../DropDowns/ServicesDropDown";
import { usePathname, useRouter } from "next/navigation";
import { fetchDropDownServices } from "@/DAL/Fetch";
import { toast } from "react-toastify";
import Link from "next/link";

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
          <li className={pathname === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>

          <li
            className={pathname.startsWith("/services") ? "active" : ""}
            onMouseEnter={visibleDropdown}
            onMouseLeave={hidedropdown}
          >
            <Link href="/services">
              Services <FaAngleDown />
            </Link>
          </li>

          <li className={pathname === "/products" ? "active" : ""}>
            <Link href="/products">Our Products</Link>
          </li>

          <li className={pathname === "/case-study" ? "active" : ""}>
            <Link href="/case-study">Case Studies</Link>
          </li>

          <li className={pathname === "/industries" ? "active" : ""}>
            <Link href="/industries">Industries We Serve</Link>
          </li>

          <li className={pathname === "/portfolio" ? "active" : ""}>
            <Link href="/portfolio">Portfolio</Link>
          </li>

          <li className={pathname === "/blog" ? "active" : ""}>
            <Link href="/blog">Blogs</Link>
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
          <li className={pathname === "/" ? "active" : ""}>
            <Link href="/" onClick={() => setMobileMenu(false)}>
              Home
            </Link>
          </li>

          <li>
            <div className="mobile-services-row">
              <Link
                href="/services"
                className={`mobile-link ${
                  pathname.startsWith("/services") ? "active" : ""
                }`}
                onClick={() => setMobileMenu(false)}
              >
                Services
              </Link>

              <FaAngleDown
                className="expand-icon"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              />
            </div>

            {isServicesOpen && (
              <ul className="mobile-submenu">
                {services.map((service, idx) => {
                  const isServiceActive =
                    pathname === `/services/${service.slug}` ||
                    pathname.startsWith(`/services/${service.slug}/`);

                  return (
                    <li key={idx}>
                      <div className="mobile-services-row">
                        <Link
                          href={`/services/${service.slug}`}
                          className={`mobile-link ${
                            isServiceActive ? "active" : ""
                          }`}
                          onClick={() => setMobileMenu(false)}
                        >
                          {service.name}
                        </Link>

                        <FaAngleDown
                          className="expand-icon"
                          onClick={() =>
                            setActiveService((prev) =>
                              prev === service.slug ? null : service.slug
                            )
                          }
                        />
                      </div>

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
                              >
                                <Link
                                  href={`/services/${service.slug}/${sub.slug}`}
                                  onClick={() => setMobileMenu(false)}
                                >
                                  {sub.name}
                                </Link>
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

          <li className={pathname === "/products" ? "active" : ""}>
            <Link href="/products" onClick={() => setMobileMenu(false)}>
              Our Products
            </Link>
          </li>

          <li className={pathname === "/case-study" ? "active" : ""}>
            <Link href="/case-study" onClick={() => setMobileMenu(false)}>
              Case Studies
            </Link>
          </li>

          <li className={pathname === "/industries" ? "active" : ""}>
            <Link href="/industries" onClick={() => setMobileMenu(false)}>
              Industries We Serve
            </Link>
          </li>

          <li className={pathname === "/portfolio" ? "active" : ""}>
            <Link href="/portfolio" onClick={() => setMobileMenu(false)}>
              Portfolio
            </Link>
          </li>

          <li className={pathname === "/blog" ? "active" : ""}>
            <Link href="/blog" onClick={() => setMobileMenu(false)}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;