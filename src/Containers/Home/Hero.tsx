import React from 'react';
import { Section, SlideItem, HeroImage } from './Hero.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface IProps {
  beauty?: any;
  snap?: any;
}

const heroImages = [
  {
    name: 'beauty',
  },
  {
    name: 'snap',
  },
  {
    name: 'wedding',
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
              <HeroImage
                key={index}
                aira-label={images.name}
                beauty="da"
                snap="dada"
              />
            </SlideItem>
          ))}
        </Slider>
      </Section>
    </>
  );
};

export default HeroComponent;
