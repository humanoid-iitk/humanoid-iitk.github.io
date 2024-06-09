// components/Carousel.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const CarouselContainer = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Adjust height as needed */
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px;
  font-size: 20px;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 10px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
`;

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CarouselContainer>
      <ImageContainer>
        <Image
          src={images[index]}
          alt={`Slide ${index}`}
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>
      <PrevButton onClick={handlePrev}>{"<"}</PrevButton>
      <NextButton onClick={handleNext}>{">"}</NextButton>
    </CarouselContainer>
  );
};

export default Carousel;
