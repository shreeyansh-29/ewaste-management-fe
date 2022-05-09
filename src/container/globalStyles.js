import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
 html, body {
  overflow-x: hidden;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  background-color: rgb(14, 185, 207);
  border: none;
  border-radius: 7px;
  color: white;
  padding: 5px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;

  &:hover {
    color: rgb(144, 117, 221);
    background-color: #ffffff;
  }
`;

export default GlobalStyle;
