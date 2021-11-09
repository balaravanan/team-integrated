import React, { useState } from 'react';
import axios from 'axios';

export const VideoInput = () => {
    const [Video, setVideo] = useState(null);

  const handleVideo = async (event) => {
    const formData = new FormData();
    formData.append("video", Video.video);
    formData.append("name", Video.video.name);
    console.log("formData", formData);
    await axios
      .post("http://192.168.2.29:8000/uploadVideo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const onVideoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let vid = event.target.files[0];
      setVideo({
        video: vid,
      });
    }
  };
    return (
      <div className="App">
        <form onSubmit={handleVideo}>
          <p>
            <input type="file"
                   id="image"
                   onChange={onVideoChange} required/>
          </p>
          <input type="submit"/>

        </form>
      </div>
    );
  }

