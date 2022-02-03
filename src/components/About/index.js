import React from "react";
import {
  InfoContrainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  Spacer,
} from "./AboutElements";

const about = () => {
  return (
    <>
      <InfoContrainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>DogeVerse</Heading>
                <Subtitle>
                  make a paragraph or sum about the comic (maybe hold = free
                  digital comic and free physical to first 2000)
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
