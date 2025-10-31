import React from "react";
import "./RealWorldSkeleton.css";

const RealWorldSkeleton = () => {
    return (
        <div className="realworld-skeleton-workarea">
            {[1, 2, 3].map((item) => (
                <div key={item} className="realworld-skeleton-card">
                    <div className="realworld-skeleton-line shimmer short"></div>
                    <div className="realworld-skeleton-image shimmer"></div>

                    <div className="realworld-skeleton-line shimmer"></div>
                </div>
            ))}
        </div>
    );
};

export default RealWorldSkeleton;
