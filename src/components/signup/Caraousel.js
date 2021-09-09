import React from "react";
import { Image, Box, Text, Heading} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./caraousel.css";

export default function Caraousel({ slides }) {
  return (
    <div className="caraousel">
      <Box as="div">
        <Box
          boxSize="sm"
          display="block"
          ml="auto"
          mr="auto"
          cursor="pointer"
        >
          <Carousel
            useKeyboardArrows
            autoPlay
            showStatus={false}
            showArrows={false}
            infiniteLoop
          >
            {slides.map((slide) => {
              return (
                <>
                  <Image 
                  src={slide.image}  
                  height="30%" 
                  mt="50px"
                  mb="20px" />

                  <Heading 
                  as="h4" size="5xm" color="#000E48" mb="30px"> {slide.text}</Heading>
                  <Text
                  mb="10px"
                  size="sm"
                  color="#000E48"
                  > {slide.secondText}</Text>
                </>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </div>
  );
}
