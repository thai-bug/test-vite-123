/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefreshProvider } from "@/contexts/RefreshContext";
import React, { FC } from "react";
import ImageSlides from "./components/ImageSlides";
import SearchField from "./components/SearchField";
import { NavBar } from "@arco-design/mobile-react";
import RecommendCountries from "./components/RecommendCountries";

const HomePage: FC = () => {
  return (
    <>
      <NavBar title="Title" hasBottomLine={false} onClickRight={() => {}} />
      <RefreshProvider>
        <div className="min-h-screen">
          <ImageSlides />
          <SearchField />
          <RecommendCountries />
        </div>
      </RefreshProvider>
    </>
  );
};

export default HomePage;
