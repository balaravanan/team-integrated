import React, { useState } from "react";
import axios from 'axios';

const FileUploader = () => {
    const [Audio, setAudio] = useState(null);


    const handleAudio = async (event) => {
        const formData = new FormData();
        console.log("formData", Audio);
        formData.append("audio", Audio.audio);
        formData.append("name", Audio.audio.name);
        console.log("formData", formData);
        await axios
          .post("http://192.168.2.29:8000/uploadAudio", formData, {
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

      const onAudioChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let aud = event.target.files[0];
          setAudio({
            audio: aud,
          });
        }
      };    
  return (
    <div>
       <form onSubmit={handleAudio}>
        <p>
          <input type="file"
                 id="image"
                 onChange={onAudioChange} required/>
        </p>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default FileUploader;
