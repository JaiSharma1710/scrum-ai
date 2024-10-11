"use client";
import { LayoutPropsType } from "@/@types/types";
import Header from "../global/Header";

const LayoutProvider = ({ children }: LayoutPropsType) => {
  return (
    <div>
      <Header />
      <section className="mt-[7.5rem] px-20">
      {children}
      </section>
    </div>
  );
};

export default LayoutProvider;
