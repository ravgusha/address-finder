import { createContext } from "react";

const defaultValue = {
    navbarOpen: true
}

const Context = createContext(defaultValue);

export default Context;
