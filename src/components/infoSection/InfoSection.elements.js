import styled from "styled-components";

/*istanbul ignore next */
export const InfoSec = styled.div`
  color: #fff;
  padding: 130px 0;
  background: ${({lightBg}) => (lightBg ? "#fff" : "#101522")};
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

/*istanbul ignore next */
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
  }
`;

/*istanbul ignore next */
export const ImgWrapper = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: ${({start}) => (start ? "flex-start" : "flex-end")};
  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
`;

/*istanbul ignore next */
export const TopLine = styled.div`
  color: ${({lightTopLine}) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-left: 20%;
  border: 0;
  max-width: 130%;
  vertical-align: middle;
  display: inline-block;
  max-height: 400px;
  @media screen and (max-width: 412px) {
    padding-left: 30%;
  }
`;

/*istanbul ignore next */
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 28px;
  font-family: "Poppins", sans-serif;
  line-height: 1.1;
  font-weight: 500;
  margin-left: 9.8%;
  color: ${({lightText}) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

/*istanbul ignore next */
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  margin-left: 9.8%;
  line-height: 24px;
  color: ${({lightTextDesc}) => (lightTextDesc ? "#C0C0C0" : "#1c2237")};
`;
