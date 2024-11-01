"use client"

import React from "react";
import { useState } from "react";
import Image from 'next/image';

export default function FeatureImage() {
  // Define the class constants
    
    const [activeImage, setActiveImage] = useState(1); // Default active image is 1
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Track the selected image

    const images : { [key: number]: string } = {
      1: "/image-product-1.jpg",
      2: "/image-product-2.jpg",
      3: "/image-product-3.jpg",
      4: "/image-product-4.jpg",
    };

    // Use a more specific type for imageKey
  const toggleOverlay = (imageKey: 1 | 2 | 3 | 4) => {
    setActiveImage(imageKey); // Change the active feature image
    openModal(images[imageKey]); // Open the modal with the corresponding image
  };

   // Function to open modal and set selected image
   const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Function to move to the next image
  const nextImage = () => {
    const newImageKey = activeImage < 4 ? activeImage + 1 : 1;
    setActiveImage(newImageKey);
    setSelectedImage(images[newImageKey]);
  };

  // Function to move to the previous image
  const previousImage = () => {
    const newImageKey = activeImage > 1 ? activeImage - 1 : 4;
    setActiveImage(newImageKey);
    setSelectedImage(images[newImageKey]);
  };


  return (
    <div className="feature_image">

      <div className="feature_image-box">
        {Object.keys(images).map((key) => (
          <img
            key={key}
            src={images[Number(key)]}
            alt={`image of product ${key}`}
            className={`feature_image_${key} ${activeImage === Number(key) ? 'image_active' : 'image_inactive'}`}
          />
        ))}
      </div>

      {/* THUMBNAILS */}

      <div className="thumbnail_box">
        

      {Object.keys(images).map((key) => (
          <div
            key={key}
            className={`thumbnail_${key} ${activeImage === Number(key) ? 'thumbnail_active' : ''}`}
            onClick={() => toggleOverlay(Number(key) as 1 | 2 | 3 | 4)}
          >
            <Image
              src={`/image-product-${key}-thumbnail.jpg`}
              alt={`image of product ${key}`}
              width={100}
              height={100}
              className="thumbnail_image"
            />
          </div>
        ))}

    </div>  

        {/* Modal Overlay */}
      {isModalOpen && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage as string} alt="Selected Image" />
            <button onClick={closeModal} className="close-modal">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path 
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 
            4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" 
            fill-rule="evenodd"/></svg>
            </button>

            {/* Button to change thumbnail & feature image */}

            <button onClick={nextImage} className="btn-next_image"><svg className="icon-next_image" width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
            </svg></button>
            <button onClick={previousImage} className="btn-previous_image"><svg className="icon-previous_image" width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </button>

            {/* Thumbnails inside the modal */}

            <div className="thumbnail-overlay_box">
            {Object.keys(images).map((key) => (
          <div
            key={key}
            className={`thumbnail_${key} ${activeImage === Number(key) ? 'thumbnail_active' : ''}`}
            onClick={() => toggleOverlay(Number(key) as 1 | 2 | 3 | 4)}
          >
            <Image
              src={`/image-product-${key}-thumbnail.jpg`}
              alt={`image of product ${key}`}
              width={85}
              height={80}
              className="thumbnail_image"
            />
          </div>
        ))}
        </div> 
          </div>
        </div>  
      )}

    </div>
);
}