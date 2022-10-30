import React from 'react';
import { createContext, useState } from 'react';

interface IDefaultValue {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: IDefaultValue = {
  isNavbarOpen: true,
  setIsNavbarOpen: () => {},
};

const Context = createContext(defaultValue);

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  return <Context.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>{children}</Context.Provider>;
};

export default Context;
