import { createContext, useContext } from 'react';

import { AppContextData } from './types';
import { DEFAULT_CONTEXT_VALUE } from './constants';

const appContext = createContext<AppContextData>(DEFAULT_CONTEXT_VALUE);

export const AppContextProvider = appContext.Provider;
export const useAppContext = () => useContext(appContext);
