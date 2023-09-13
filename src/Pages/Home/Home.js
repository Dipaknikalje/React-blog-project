import React, { useContext } from "react";
import { store } from "../../Utility/Details";
import { Link } from "react-router-dom";
import "./Home.css";
import "../../App.css";

function Home() {
  const [details] = useContext(store);
  console.log(details);
  return (
    <div className="main_common">
      <div className="TopPoster__div">
        {details
          .filter((val) => {
            return val.id === 1;
          })
          .map((value, index) => (
            <div key={index}>
              <div className="TopPoster__big">
                <Link to={`/article/${value.id}`} className="mainlink">
                  <img src={value.Image} alt={"img not found"} />
                  <p>
                    <span className="text-float">
                      {value.title.slice(0, 44)}
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          ))}
        <div className="TopPoster__small">
          {details
            .filter((val) => {
              return val.id === 9;
            })
            .map((value, index) => (
              <div key={index}>
                <div className="TopPoster__small_upper">
                  <Link to={`/article/${value.id}`} className="mainlink">
                    <img
                      src={value.Image}
                      width={400}
                      height={245}
                      alt={"img not found"}
                    />
                    <p>
                      <span className="text-float">{value.title}</span>
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          {details
            .filter((val) => {
              return val.id === 8;
            })
            .map((value, index) => (
              <div key={index}>
                <div className="TopPoster__small_smaller">
                  <Link to={`/article/${value.id}`} className="mainlink">
                    <img
                      src={value.Image}
                      width={400}
                      height={245}
                      alt={"img not found"}
                    />
                    <p>
                      <span className="text-float">{value.title}</span>
                    </p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <h2 className="home_h1">Latest Travel stories...</h2>
      <div className="common_latest">
        {details
          .filter((val) => {
            return val.category === "travel";
          })
          .map((value, index) => (
            <div key={index}>
              <div className="box1">
                <Link to={`/article/${value.id}`} className="mainlink">
                  <img
                    src={value.Image}
                    width={200}
                    height={200}
                    alt={"img not found"}
                  />

                  <h2 className="bolly_title">{value.title.slice(0, 30)}</h2>
                  <p p className="desc">
                    {value.description.slice(0, 120)}....
                  </p>
                  <br />
                  <h6>{value.category}/30/05/23</h6>
                </Link>
              </div>
            </div>
          ))}
      </div>

      <h2 className="home_h1">Latest Bollywood stories...</h2>
      <div className="common_latest">
        {details
          .filter((val) => {
            return val.cat === "home";
          })
          .map((value, index) => (
            <div key={index}>
              <div className="box1">
                <Link to={`/article/${value.id}`} className="mainlink">
                  <img
                    src={value.Image}
                    width={200}
                    height={200}
                    alt={"img not found"}
                  />

                  <h2 className="bolly_title">{value.title.slice(0, 30)}</h2>
                  <p p className="desc">
                    {value.description.slice(0, 120)}....
                  </p>
                  <br />
                  <h6>{value.subcat}/30-05-23</h6>
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className="Category_div">
        <div className="left_Side_Of_Category">
          {details
            .filter((val) => {
              return val.cat === "holly";
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
                        <p className="bolly_title" color="black">
                          {value.title}
                        </p>
                        <br />
                        <p className="desc">Rating: {value.rating}</p>
                        <br />

                        <p className="desc">
                          {value.description.slice(0, 150)}...
                        </p>
                        <br />

                        <p className="release">Release on: {value.Release}</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <hr />
              </div>
            ))}
        </div>

        <div>
          <div className="home_add"></div>
        </div>
      </div>

      <h2 className="home_h1">Latest Fitness stories...</h2>

      <div className="common_latest">
        {details
          .filter((val) => {
            return val.cat === "Fit";
          })
          .map((value, index) => (
            <div key={index}>
              <div className="box1">
                <Link to={`/article/${value.id}`} className="mainlink">
                  <img
                    src={value.Image}
                    width={200}
                    height={200}
                    alt={"img not found"}
                  />

                  <h2 className="bolly_title">{value.title.slice(0, 30)}</h2>
                  <p p className="desc">
                    {value.description.slice(0, 120)}....
                  </p>
                  <br />
                  <h6>{value.category}/30-05-23</h6>
                </Link>
              </div>
            </div>
          ))}
      </div>
      <h2 className="home_h1">Latest Technology stories...</h2>

      <div className="common_latest">
        {details
          .filter((val) => {
            return val.cat === "Tech";
          })
          .map((value, index) => (
            <div key={index}>
              <div className="box1">
                <Link to={`/article/${value.id}`} className="mainlink">
                  <img
                    src={value.Image}
                    width={200}
                    height={200}
                    alt={"img not found"}
                  />

                  <h2 className="bolly_title">{value.title.slice(0, 30)}</h2>
                  <p p className="desc">
                    {value.description.slice(0, 120)}...
                  </p>
                  <br />
                  <h6>{value.subcat}/30-05-23</h6>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
