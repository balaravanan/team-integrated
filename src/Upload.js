import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {

  const [image, setImage] = useState(null);
  
  const handleImage = async (event) => {
    const formData = new FormData();
    formData.append("image", image.image);
    formData.append("name", image.image.name);
    console.log("formData", formData);
    await axios
      .post("http://192.168.2.29:8000/uploadImage", formData, {
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
  const onImageChange = (event) => {
    let img = event.target.files[0];
    setImage({
      image: img,
    });
    
  };

    return (
      <div className="App">
        <form onSubmit={onImageChange}>
        
          <p>
            <input type="file"
                   id="image"
                   onChange={handleImage} required/>
          </p>
          <input type="submit"/>

        </form>
      </div>
    );
  }


export default Upload;