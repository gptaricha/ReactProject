// React core
import React from "react";

// Components
import Header from "../organisms/Header";

export default function VideoPage({ match, information }) {
   console.log("Video Page component");
   console.log("match", match);
   console.log("match:  ", match.params.id);
   const matchId = match.params.id
    const {
        videoURL,
        title,
        views,
        uploadDate,
        channelThumb,
        channelName,
        suscribers,
        description,
      } = information[matchId];
    return (
        <div className="video-page">
            <Header />
            <div className="video-container">
                {/* controls enable the play pause, etc otherwise the video appears with any buttons */}
                <video controls>
                    <source src={videoURL} type="video/mp4" />
                </video>
            </div>
            <div className="body-container">
                <h1 className="title">{title}</h1>
                <p className="description">
                    {views} views • {uploadDate}
                </p>
                <hr />
                <div className="meta-data">
                    <div className="left">
                    <img
                        className="channel-thumb"
                        src={channelThumb}
                        alt="Channel thumbnail"
                    />
                    </div>
                    <div className="right">
                        <h1 className="title">{channelName}</h1>
                        <p className="description">{suscribers} suscribers</p>
                        <p className="description">{description}</p>
                    </div>
                </div>
                < hr/>
                <a className="button" href="#">
                Back to home
                </a>
            </div>
        </div>
    );
}