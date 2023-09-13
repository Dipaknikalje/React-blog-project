// import React from "react";
// import { useContext } from "react";
// import { useParams, Link } from "react-router-dom";
// import { store } from "../Utility/details";
// import DisplayIcon from "../Components/Footer/DisplayIcon";
import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { store } from "../Utility/Details";
import DisplayIcon from "../Components/Footer/DisplayIcon";
import "./article.css";
import "../App.css";

function Article() {
  const [details] = useContext(store);
  var { Id } = useParams();
  Id = +Id;
  var newCategory;
  console.log(details);
  for (var i = 0; i < details.length; i++) {
    if (details[i].id === Id) {
      newCategory = details[i].category;
      break;
    }
  }

  return (
    <div>
      {details
        .filter((val) => val.id === Id)
        .map((value, index) => (
          <div key={index}>
            <div className="article_div">
              <div className="icon">
                <DisplayIcon />
              </div>
              <h1>{value.title}</h1>

              <div className="article_img">
                <img
                  src={value.Image}
                  alt="img not found"
                  width={300}
                  height={300}
                />
              </div>

              <div className="article_description">
                <p>{value.description}</p>
              </div>
            </div>
          </div>
        ))}
      <h2 className="moreh2">Related....</h2>
      <div className="article_more_div">
        {details
          .filter((val) => val.id !== Id && val.category === newCategory)
          .slice(0, 3)
          .map((value, index) => (
            <div key={index}>
              <div>
                <div>
                  <Link to={`/article/${value.id}`}>
                    <img
                      src={value.Image}
                      height={250}
                      width={250}
                      alt={"img not found"}
                    />
                  </Link>
                </div>
                <div>
                  <p>{value.description.slice(0, 120)}...</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Article;
