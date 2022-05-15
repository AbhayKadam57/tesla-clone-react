import React from 'react';
import styled from 'styled-components'
import Section from "../Components/Section"

function Home() {
  return (
    <Container>
      <Section
      title="Model 3"
      description="Order Online for"
      SpanText="Touchless Delivery"
      LeftButtonText="Custom Delivery"
      RightButtonText="Existing Inventory"
      backgroundImg="model-3.jpg"    
      />
       <Section
      title="Model Y"
      description="Order Online for"
      SpanText="Touchless Delivery"
      LeftButtonText="Custom Delivery"
      RightButtonText="Existing Inventory"
      backgroundImg="model-y.jpg"    
      />
       <Section
      title="Model S"
      description="Order Online for"
      SpanText="Touchless Delivery"
      LeftButtonText="Custom Delivery"
      RightButtonText="Existing Inventory"
      backgroundImg="model-s.jpg"    
      />
       <Section
      title="Model X"
      description="Order Online for"
      SpanText="Touchless Delivery"
      LeftButtonText="Custom Delivery"
      RightButtonText="Existing Inventory"
      backgroundImg="model-x.jpg"    
      />
       <Section
      title="Solar Panels"
      description="Lowest Cost Solar Panels in America"
      SpanText=""
      LeftButtonText="Custom Delivery"
      RightButtonText="Existing Inventory"
      backgroundImg="solar-panel.jpg"    
      />
       <Section
      title="Solar Roof"
      description="Produce Clean Energy From Your Roof"
      SpanText=""
      LeftButtonText="Custom Delivery"
      RightButtonText="Existing Inventory"
      backgroundImg="solar-roof.jpg"    
      />
       <Section
      title="Accessories"
      description=""
      SpanText=""
      LeftButtonText="Custom Delivery"
      backgroundImg="accessories.jpg"    
      />
      
    </Container>
  );
}

export default Home;


const Container = styled.div`

    width:100vw;
    
`