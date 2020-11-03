import React from "react";

export default function Card({data}) {
    console.log("Card Component");
    console.log(data);
     // Here is where we do the break down the data
  const {
    id,
    title,
    description,
    channelName,
    channelThumb,
    suscribers,
    views,
    videoThumb,
  } = data;

  return (
      <article className ="card">
          <a href ="#" >
              <img className ="thumbnail" src={videoThumb} alt ={description}></img>
          </a>
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