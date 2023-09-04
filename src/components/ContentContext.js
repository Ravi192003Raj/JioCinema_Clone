import React, { createContext} from 'react';

const ContentContext = createContext();
const ContentDataProvider = ({ children, sliderData }) => {
  return (
    <ContentContext.Provider value={sliderData}>
      {children}
    </ContentContext.Provider>
  );
};

export { ContentContext, ContentDataProvider };