import { createContext, useContext } from "react";

export const CustomModalContext = createContext();

export const useCustomModal = () => useContext(CustomModalContext);