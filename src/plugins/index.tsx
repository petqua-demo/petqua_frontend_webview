import React, { createContext, useContext, useEffect, useState } from 'react';
import DaumPostcode from './lib/ReactDaumPostcode'; // Assuming this is the converted component from the previous example
import { createReactDaumPostcode } from './lib/createReactDaumPostcode';

// Assuming similar types exist or have been converted to TypeScript types/interfaces for React
import type {
  ReactDaumPostcodeTheme,
  ReactDaumPostcodeCompleteResult,
  ReactDaumPostcodeSearchResult,
  ReactDaumPostcodeResizeResult,
} from './lib/interfaces';

// Context creation for global options
const DaumPostcodeContext = createContext({});

export function DaumPostcodeProvider({ children, options }: any) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load any global scripts or initialize anything needed for the Daum Postcode
    setIsLoaded(true);
  }, []);

  const contextValue = {
    isLoaded,
    options,
  };

  return <DaumPostcodeContext.Provider value={contextValue}>{children}</DaumPostcodeContext.Provider>;
}

// Custom hook to use the DaumPostcode context
export function useDaumPostcode() {
  const context = useContext(DaumPostcodeContext);
  if (context === undefined) {
    throw new Error('useDaumPostcode must be used within a DaumPostcodeProvider');
  }
  return context;
}

export {
  DaumPostcode,
  createReactDaumPostcode,
  ReactDaumPostcodeTheme,
  ReactDaumPostcodeCompleteResult,
  ReactDaumPostcodeSearchResult,
  ReactDaumPostcodeResizeResult,
};
