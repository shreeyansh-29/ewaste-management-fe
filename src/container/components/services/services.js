import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
} from "./servicesElements";

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>Customer</ServicesH2>
          <ServicesP>
            As a E-Waste Generator, our application enables you to list the
            various electronic-waste items you want to donate and provides you
            with different options to donate them either by dropping off or
            requesting for a pick up. You get to view the different donation
            drives in your city and can pro-actively participate in the
            organized drives. You can also keep track of your requests, check
            how often you donate your e-waste and which kind of waste do you
            generate the most.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Collector</ServicesH2>
          <ServicesP>
            As an E-Waste Collector , we aim at providing the best possible
            solution to bridge your access to both the generators and the
            vendors by enabling you to view, accept or decline the various
            donation requests, helping you organize an E-Waste drive to have a
            better presense and good collection and provide you with an
            interface where you can put up various items for sale and send a
            request to all the vendors in your city. We aim at giving to the
            best of both worlds with various performance indicators helping you
            re-evaluate your progress
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Vendor</ServicesH2>
          <ServicesP>
            As a Recycling Vendor, you can view the various items that are for
            sale, make modifications as per your requirements and accept an
            order. We aim at providing a collector-vendor relationship for you
            once you are interested. Furthermore, you can view and analyse the
            various categories of items you purchased and recycled and look out
            for competition in your market.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
