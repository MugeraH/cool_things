import Image from "next/image";
import React from "react";

// https://unsplash.com/photos/assorted-candies-and-chocolate-pack-VklmASEqBvQ
// https://unsplash.com/photos/assorted-color-abstract-painting-tZc3vjPCk-Q
// https://unsplash.com/photos/person-using-marshall-headphones-jmZ6QjvJjvk

function AnimatedCourasel() {
  return (
    <div className="wrapper">
      <h4 className="text-white">
        Animating a CSS Grid template to create a case carousel
      </h4>
      <div className={`styles.slider-container`}>
        <Slide imageSrc="/img/candy.jpg" />
        <Slide imageSrc="/img/candy.jpg" /> <Slide imageSrc="/img/candy.jpg" />
      </div>
    </div>
  );
}

type SlideProps = {
  imageSrc: string;
};

const Slide = ({ imageSrc }: SlideProps) => (
  <div className="slide">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={imageSrc} alt="card_image" />
    {/* <Image width={300} height={300} alt="card_image" src={imageSrc} /> */}
    <a href="#">
      View case <ArrowRight />
    </a>{" "}
  </div>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default AnimatedCourasel;
