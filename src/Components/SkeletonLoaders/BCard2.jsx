import "./BCard2.css";

const BCard2 = () => {
  return (
    <div className="blog-card blog-skeleton-card">
      {/* Top: dot + readtime */}
      <div className="blog-card-top">
        <span className="blog-skeleton-dot"></span>
        <span className="blog-skeleton-readtime"></span>
      </div>

      {/* Bottom: title + desc + button */}
      <div className="blog-card-bottom">
        <div className="blog-skeleton-title"></div>
        <div className="blog-skeleton-title short"></div>

        <div className="blog-skeleton-bottom">
          <div className="desc-container">
            <div className="blog-skeleton-desc"></div>
            <div className="blog-skeleton-desc mid"></div>
            <div className="blog-skeleton-desc short"></div>
          </div>
          <div className="blog-skeleton-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default BCard2;
