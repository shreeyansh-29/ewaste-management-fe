import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #101522;

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 550px) {
    height: 1300px;
  }
  @media screen and (max-width: 412px) {
    height: 1400px;
  }
  @media screen and (max-width: 375px) {
    height: 1550px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 430px;
  padding: 30px;
  box-shadow: 0 1px 3px rbga(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: default;
    color: white;
    background-color: rgb(144, 117, 221);
  }
  @media screen and (max-width: 1170px) {
    max-height: 500px;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  font-family: "Poppins";
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: "Poppins";
`;

export const ServicesP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  font-family: "Poppins";
`;
