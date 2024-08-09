/* eslint-disable @typescript-eslint/no-explicit-any */
import { COUNTRIES } from "@/utils/countries";
import React, { FC, useEffect } from "react";

interface HeaderProps {
  countryCode: string;
}

const Header: FC<HeaderProps> = ({ countryCode }) => {
  const [country, setCountry] = React.useState<any>();

  useEffect(() => {
    const selectedCountry = COUNTRIES.find((c) => c.code === countryCode);
    setCountry(selectedCountry);
  }, [countryCode]);

  return (
    // <Sticky topOffset={35}>
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 min-h-[9rem] px-5 pt-10">
      <span className="text-white text-xl font-semibold">{country?.name}</span>
      <br />
      <span className="text-white">Plan initiated the first connection</span>
    </div>
    // </Sticky>
  );
};

export default Header;
