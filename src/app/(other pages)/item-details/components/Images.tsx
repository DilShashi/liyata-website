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
          height={1000}
          style={{ objectFit: 'cover' }} // Cover the entire box, cropping if necessary
        />
      </div>

      {/* Sub Images Section */}
      {allImages.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '1450px', // Place it just below the main image (1000px height + some gap)
            left: '112px', // Align it horizontally with the main image
            display: 'flex',
            justifyContent: 'center', // Center the sub-images horizontally
            gap: '15px', // Add space between sub-images
            width: '592px', // Make the container the same width as the main image
            paddingBottom: '10px', // Add spacing below the sub-images
          }}
        >
          {/* Sub-image container with horizontal scrolling if needed */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap', // Prevent wrapping of the sub-images
              overflowX: 'auto', // Enable horizontal scroll if there are more than 3 images
              gap: '15px', // Space between images
              width: '100%', // Use full available width
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
                  style={{ objectFit: 'cover' }} // Ensure images are cropped to fit within the 200x200 box
                />
              </div>
              
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
