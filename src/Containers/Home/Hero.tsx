import React from 'react';
import { Section, SlideItem, HeroImage } from './Hero.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// images
import beautyImage from '../../assets/images/main-ben/beauty.jpg';
import snapImage from '../../assets/images/main-ben/snap.jpg';
import weddingImage from '../../assets/images/main-ben/wedding.jpg';
export interface IProps {}

const heroImages = [
  {
    name: 'beauty',
    image: `${beautyImage}`,
  },
  {
    name: 'snap',
    image: `${snapImage}`,
  },
  {
    name: 'wedding',
    image: `${weddingImage}`,
  },
];

const HeroComponent: React.FC<IProps> = () => {
  const slidesSetting = {};
  return (
    <>
      <Section aria-label="hero">
        <Slider {...slidesSetting}>
          {heroImages.map((images, index) => (
            <SlideItem>
              <HeroImage key={index} aira-label={images.name}></HeroImage>
            </SlideItem>
          ))}
        </Slider>
      </Section>
    </>
  );
};

export default HeroComponent;
