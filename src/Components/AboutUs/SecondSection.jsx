import React from "react";
import "./SecondSection.css";
const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="left">
        <h2>HEADING HERE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          temporibus reiciendis laboriosam aliquid dolore in nemo eaque pariatur
          fugiat sequi autem quibusdam veniam, eveniet expedita nam, suscipit
          consequuntur dolorem repellendus impedit. Quibusdam maxime provident
          commodi at libero, quod est magnam. consequuntur dolorem repellendus
          impedit. Quibusdam maxime provident commodi at libero, quod est
          magnam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          voluptatibus dolore aperiam perspiciatis dolor, explicabo distinctio
          similique amet, nam cupiditate itaque maxime eaque voluptatem iste
          porro quisquam culpa, esse sed veniam provident quos illum nobis ipsum
          officiis! Repellat, reiciendis ut. porro quisquam culpa, esse sed
          veniam provident quos illum nobis ipsum officiis! Repellat ut.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit alias maxime asperiores aliquam omnis. Impedit
          repellendus saepe quisquam ipsa odio quidem non ipsum at, nihil
          architecto voluptatum ratione sapiente corporis quas similique autem
          incidunt earum possimus quia magni natus. Quis? architecto voluptatum
          ratione sapiente corporis quas similique autem incidunt earum possimus
          quia magni natus. Quis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam
          iusto itaque voluptatem cumque recusandae molestias eos veritatis
          laborum quia dicta facere voluptates, cupiditate provident beatae
          quasi tempore quo nisi voluptate odio! Vel est ratione deserunt,
          aliquid ea fugit debitis. quasi tempore quo nisi voluptate odio! Vel
          est ratione deserunt, aliquid ea fugit debitis.
        </p>
      </div>
      <div className="right">
        <div className="top-parent">
          <div className="top">
            <div className="content">
              <strong>230 +</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis soluta
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam omnis nostrum vitae sit
              </p>
            </div>
            <div className="img-section">
              <div
                className="box1"
                style={{
                  backgroundImage: `url(/blog-thumbnail.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="box2"
                style={{
                  backgroundImage: `url(/blog-thumbnail.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </div>
        <button className="proposal-btn">Get Proposal</button>
      </div>
    </div>
  );
};

export default SecondSection;
