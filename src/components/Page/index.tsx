import React from 'react'
import DefaultOverlayContent from '../DefaultOverlayContent'
import { ModelSection, ModelsWrapper } from '../Model'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (

            <ModelSection
              className='colored' 
              modelName={modelName}
              key={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />

          ))}
          

        </div>

        <Spacer />

        <UniqueOverlay />

      </ModelsWrapper>
    </Container>
  )
}

export default Page
