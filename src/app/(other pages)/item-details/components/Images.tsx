import React, { useState } from 'react';
import { itemsData } from '../../[category]/data/itemsData'; // Adjust the import according to your file structure
import Image from 'next/image';

const Images = ({ id }: { id: number }) => {
  const [currentMainImage, setCurrentMainImage] = useState<string>('');

  // Find the item based on the provided id
  const item = itemsData.find(item => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  const { mainImage, subImages = [] } = item; // Default `subImages` to an empty array if it's undefined

  // Default to the main image when the component loads
  if (currentMainImage === '') {
    setCurrentMainImage(mainImage);
  }

  // Combine mainImage with subImages and ensure uniqueness
  const allImages = [mainImage, ...subImages.filter(image => image !== mainImage)];

  // Handle sub-image click to update the main image
  const handleSubImageClick = (subImage: string) => {
    setCurrentMainImage(subImage); // Update the main image to the clicked sub-image
  };

  return (
    <div>
      {/* Main Image Section */}
      <div
        style={{
          marginTop: '200px',
          position: 'absolute',
          width: '592px',
          height: '1000px',
          left: '112px',
          backgroundColor: 'black', // Fill excess space with black color
          display: 'flex',
          justifyContent: 'center', // Center the image horizontally
          alignItems: 'center', // Center the image vertically
          overflow: 'hidden', // Crop the image if it's larger than the box
        }}
      >
        <Image
          src={currentMainImage}
          alt="Main Image"
          layout="intrinsic"
          width={592}
          height={1300}
          style={{ objectFit: 'cover' }} // Cover the entire box, cropping if necessary
        />
      </div>

      {/* Sub Images Section */}
      {allImages.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '1430px',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center', // Center the sub-images horizontally
            gap: '15px', // Add space between sub-images
            overflowX: 'auto', // Allow horizontal scroll if more than 3 sub-images
            width: '592px', // Make the container the same width as the main image
            marginLeft: '112px', // Center the sub-image section to align with the main image
            paddingBottom: '10px', // Add spacing below the sub-images
          }}
        >
          {allImages.map((image, index) => (
            <div
              key={index}
              style={{
                width: '200px', // Fixed size for sub-image boxes
                height: '200px', // Fixed size for sub-image boxes
                cursor: 'pointer',
                overflow: 'hidden', // Ensure the image fits within the box
                border: currentMainImage === image ? '5px solid #007bff' : '2px solid #ccc', // Border for selected image
                borderRadius: '8px', // Add rounded corners to the sub-images
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center', // Center the image horizontally
                alignItems: 'center', // Center the image vertically
              }}
              onClick={() => handleSubImageClick(image)}
            >
              <Image
                src={image}
                alt={`Sub Image ${index + 1}`}
                width={200}
                height={200}
                //style={{ borderRadius: '8px', objectFit: 'cover', border: '2px solid #000' }} // Highlight selected image

              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Images;
