import React, { useState, useEffect } from "react";
import axios from "axios";
import {ProjectButtons} from "../components/ProjectButtons";

function ProjectApi() {
  const key = 'pKDOXTOx-03A1zK17qsFx576maZnElGs3Yp-s4OFF8E';
  const API_URL = `https://api.unsplash.com`;

  const [images, setImages] = useState([]);

  const getImages = async (query = 'interior') => {
    try {
      const {data} = await axios.get(`${API_URL}/search/photos/?query=${query}&client_id=${key}&per_page=50`)
      const imageUrls = data.results.map((image) => image.urls.regular);
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="container ">
      <div className="projects__gallery">
        <ProjectButtons getImages={getImages}/>
        <div className="gallery">
          {images.map((imageUrl, index) => (
            <div className="gallery__item col m6" key={index}>
              <img src={imageUrl} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ProjectApi };


