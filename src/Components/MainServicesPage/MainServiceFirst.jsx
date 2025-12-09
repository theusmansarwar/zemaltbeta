import { baseUrl } from "@/config/Config";
import "./MainServiceFirst.css";

const data = {
  image: "/blog-thumbnail.jpg",
  title: "Anything in content will be displayed here",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio ea autem sit corrupti, numquam molestias nesciunt alias eveniet suscipit tenetur reprehenderit nulla, assumenda consectetur nisi quis expedita neque hic facere? Libero, vel consequuntur assumenda possimus explicabo suscipit rem eius minima in perspiciatis est.",
};

export default function MainServiceFirst({ data }) {
  return (
    <div className="main-first-section">
      <div className="left">
        <img
          src={baseUrl + data.image}
          className="main-first-img"
          alt={data.title}
        />
      </div>

      <div className="right">
        <h2 className="main-first-title">{data.heading}</h2>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
}
