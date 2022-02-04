import React from "react";
import { HomeButton } from "../HomeButtonElements";
import { animateScroll as scroll } from "react-scroll";
import img from "../../images/1.gif";
import {
  InfoContrainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Spacer,
} from "./AboutElements";

const about = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <InfoContrainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>DogeVerse</Heading>
                <Subtitle>
                  make a paragraph or sum about the comic (maybe hold = free digital comic and free physical to first 2000)
                  <Spacer></Spacer>
                  also donate some amount to dog charity
           
                  
                </Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContrainer>
    </>
  );
};

export default about;
