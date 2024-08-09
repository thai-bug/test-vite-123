import { Carousel } from "@arco-design/mobile-react";

const slides = [
  {
    src: "https://esim.gohub.vn/wp-content/uploads/2024/06/BE-Banner-1024x347.jpeg",
    alt: "Slide 1",
  },
  {
    src: "https://esim.gohub.vn/wp-content/uploads/2024/06/BE-Banner-1024x347.jpeg",
    alt: "Slide 2",
  },
  {
    src: "https://esim.gohub.vn/wp-content/uploads/2024/06/BE-Banner-1024x347.jpeg",
    alt: "Slide 3",
  },
];

const ImageSlides = () => {
  return (
    <Carousel indicatorType="circle">
      {slides.map((slide) => (
        <img key={slide.alt} src={slide.src} alt={slide.alt} />
      ))}
    </Carousel>
  );
};

export default ImageSlides;
