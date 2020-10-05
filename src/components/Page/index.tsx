import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModalsWrapper>
        <div>
          <ModalSection 
            modelName='Model One'
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Order Online for Delivery"
              />
            }
          />

        </div>
      </ModalsWrapper>
    </Container>
  );
};

export default Page;
