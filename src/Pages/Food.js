import React, { useContext } from "react";
import { store } from "../Utility/Details";
import { Link } from "react-router-dom";

function Food() {
  const [details] = useContext(store);
  console.log(details);
  return (
    <div>
      <h1 className="catagoryh1">Food</h1>
      <div className="Category_div">
        <div className="left_Side_Of_Category">
          {details
            .filter((val) => {
              return val.category === "Food";
            })
            .map((value, index) => (
              <div key={index}>
                <div className="child_data_left_Side_Of_Category">
                  <div className="description_div">
                    <Link to={`/article/${value.id}`} className="link_bolly">
                      <img
                        src={value.Image}
                        width={300}
                        height={300}
                        alt={"img not found"}
                      />

                      <div className="text-bolly">
                        <p className="bolly_title">{value.title}</p>
                        <br />
                        <p>{value.description.slice(0, 300)}...</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <hr />
              </div>
            ))}
        </div>

        <div className="right_Side_Of_Category">
          <div>
            <h1 className="catagoryh1">Top News</h1>
            {details
              .filter((val) => {
                return val.subcat === "Food-Top";
              })
              .map((value, index) => (
                <div key={index}>
                  <div className="top_news_div">
                    <div>
                      <Link to={`/article/${value.id}`}>
                        <img
                          src={value.Image}
                          width={150}
                          height={150}
                          alt={"img not found"}
                        />
                      </Link>
                    </div>

                    <div>
                      <p className="topnews-p">{value.title}</p>
                    </div>
                  </div>
                  <hr className="topnews_hr" />
                </div>
              ))}
          </div>
          <div className="home_add"></div>
        </div>
      </div>
    </div>
  );
}

export default Food;
