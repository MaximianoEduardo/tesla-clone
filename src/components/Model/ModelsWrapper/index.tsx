import React, { useCallback, useRef, useState } from 'react';
import ModelContext, { CarModel } from '../ModelContext'
import { Container, OverlaysRoot } from './styles'
import ModelOverlay from '../ModelOverlay'

const ModelsWrapper: React.FC = ({children}) => {

  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state => state.filter(model => model.modelName != modelName))
  }, [])

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName) || null
  },[])

  return (
    <ModelContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName
    }}>
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelName}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>
        {children}
      </Container>
    </ModelContext.Provider>
  );
};

export default ModelsWrapper;
