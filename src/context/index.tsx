import { Dispatch, ReactNode, createContext, useState, SetStateAction } from 'react';

interface IDefaultValue {
  isNavbarOpen: boolean;
  setIsNavbarOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: IDefaultValue = {
  isNavbarOpen: true,
  setIsNavbarOpen: () => {},
};

const Context = createContext(defaultValue);

interface IContextProvider {
  children: ReactNode;
}

export const ContextProvider = ({ children }: IContextProvider) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  return <Context.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>{children}</Context.Provider>;
};

export default Context;
