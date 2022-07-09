import styled from "styled-components";

/* istanbul ignore next */
export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0 60px;
  background: ${({lightBg}) => (lightBg ? "#fff" : "#101522")};
  @media screen and (max-width: 768px) {
    padding: 100px 0 0;
  }
`;

/* istanbul ignore next */
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({imgStart}) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 10%;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    margin-right: 55px;
  }
`;

/* istanbul ignore next */
export const ImgWrapper = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: ${({start}) => (start ? "flex-start" : "flex-end")};
`;

/* istanbul ignore next */
export const TopLine = styled.div`
  color: ${({lightTopLine}) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 400px;
`;

/* istanbul ignore next */
export const Heading = styled.h1`
  margin-bottom: 24px;
  margin-left: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  margin-left: 15%;
  line-height: 1.1;
  font-weight: 500;
  color: ${({lightText}) => (lightText ? "#f7f8fa" : "#1c2237")};

  @media screen and (max-width: "768px") {
    font-weight: 100;
  }
`;

/* istanbul ignore next */
export const Subtitle = styled.p`
  max-width: 440px;
  margin-left: 15%;
  margin-bottom: 35px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  line-height: 24px;
  font-weight: 400;
  color: ${({lightTextDesc}) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;
