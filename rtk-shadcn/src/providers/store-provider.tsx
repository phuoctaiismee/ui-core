"use client";
import { store } from "@/stores";
import { IGlobalLayoutProps } from "@/types";
import { Provider } from "react-redux";
const StoreProvider = ({ children }: IGlobalLayoutProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
