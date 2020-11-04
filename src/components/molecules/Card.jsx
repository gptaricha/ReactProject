import React from "react";
import { Link } from "react-router-dom";

export default function Card({data}) {
    {/*console.log("Card Component");
    console.log(data); */}
     // Here is where we do the break down the data
  const {
      id,
    title,
    description,
    channelName,
    channelThumb,
    views,
    videoThumb,
  } = data;

  return (
      <article className ="card">
          <Link to ={`video/${id}`} >
              <img className ="thumbnail" src={videoThumb} alt ={description}></img>
          </Link>
          <aside className="meta-data">
              <div className="left">
                  <img
                    className="channel-thumb" 
                    src={channelThumb} 
                    alt="Channel thumbnail" 
                    />
              </div>
              <div className="right">
                  <h3 className="title">{title}</h3>
                  <p className="description">{channelName}</p>
                  <p className="description">{views}</p>
              </div>
          </aside>
      </article>
  );

}