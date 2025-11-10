"use client";
import React, { useState } from "react";
import "./Cards2.css";
import { FiArrowRight } from "react-icons/fi";

const Cards2 = () => {
  const [activeId, setActiveId] = useState(null);
  const [lastRowIds, setLastRowIds] = useState([]);

  const cardsData = [
    {
      id: 1,
      Title: "This is Title",
      Subtitle: "this is sub title",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 2,
      Title: "This is Title",
      Subtitle: "this is sub title",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 3,
      Title: "This is Title",
      Subtitle: "this is sub title",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 4,
      Title: "This is Title",
      Subtitle: "this is sub title",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 5,
      Title: "This is Title",
      Subtitle: "this is sub title",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 6,
      Title: "This is Title",
      Subtitle: "this is sub title",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 7,
      Title: "This is Title",
      Subtitle: "this is sub title",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 8,
      Title: "This is Title",
      Subtitle: "this is sub title",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 9,
      Title: "This is Title",
      Subtitle: "this is sub title",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Sed nisi. Nulla quis sem at nibh elementum imperdiet.Praesent libero. Sed cursus ante dapibus diam.",
    },
  ];

  React.useEffect(() => {
    const wrappers = document.querySelectorAll(".card-wrapper");
    if (wrappers.length) {
      const lastRowTop = wrappers[wrappers.length - 1].offsetTop;
      const ids = [];
      wrappers.forEach((el, i) => {
        if (el.offsetTop === lastRowTop) {
          ids.push(cardsData[i].id);
        }
      });
      setLastRowIds(ids);
    }
  }, []);

  return (
    <div className="cards-areaforstyle">
      {cardsData.map((item) => (
        <div className="card-wrapper" key={item.id}>
          <div
            className={`cardstyle 
              ${activeId === item.id ? "active" : ""} 
              ${lastRowIds.includes(item.id) ? "last-row" : ""}`}
            onClick={() =>
              setActiveId((prev) => (prev === item.id ? null : item.id))
            }
          >
            <h2>{item.Title}</h2>
            <h3>{item.Subtitle}</h3>
            <p>{item.Description}</p>
            <div className="cardstyle-btn"><span>Click me</span> <FiArrowRight /></div>

            {activeId === item.id && (
              <>
                <div className="image1" style={{
                  backgroundImage: `url('/how-we-work.webp')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "250px",
                  marginTop: "20px"
                }}></div>
                <div className="image2"

                  style={{
                    backgroundImage: `url('/how-we-work.webp')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "250px",
                    marginTop: "20px"
                  }}></div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards2;
