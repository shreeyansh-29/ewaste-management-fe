import React from "react";
import {Button} from "../../container/globalStyles";
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
} from "./footer.elements";

import {useNavigate} from "react-router-dom";

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/SignIn");
  }
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>Join our exclusive platform</FooterSubHeading>
          <FooterSubText>You can join at any time.</FooterSubText>
          <Form>
            <Button fontBig onClick={handleClick}>
              Join
            </Button>
          </Form>
        </FooterSubscription>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Ⓒ {year} Powered by E-Waste Management
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
