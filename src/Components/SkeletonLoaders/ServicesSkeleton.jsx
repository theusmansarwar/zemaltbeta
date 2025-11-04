"use client"
import "./ServicesSkeleton.css"



const ServicesSkeleton = ({ count = 12 }) => {
  return (
    <div className="services-grid services-skeleton-container">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`services-skeleton-${index}`}
          className="servicecard services-skeleton-card"
          data-skeleton-type="services"
        >
          <div className="overlay1">
            <div className="overlay2">
              <div className="skeleton-heading services-skeleton-heading"></div>
              <div className="skeleton-text services-skeleton-text"></div>
              <div className="skeleton-text services-skeleton-text"></div>
              <div className="skeleton-text services-skeleton-text"></div>
              <div className="skeleton-text services-skeleton-text"></div>
              <div className="skeleton-button services-skeleton-button"></div>
            </div>
          </div>
          <div className="searchicon services-skeleton-icon">
            <div className="skeleton-circle services-skeleton-circle"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesSkeleton
