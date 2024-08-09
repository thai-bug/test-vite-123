/* eslint-disable @typescript-eslint/no-explicit-any */
import useContinent from "@/hooks/useContinent";
import { COUNTRIES } from "@/utils/countries";
import { useEffect, useState } from "react";
import CountryFlag from "./CountryFlag";

const RecommendCountries = () => {
  const [countries, setCountries] = useState<Record<string, any[]>>({});

  const { getCountries } = useContinent();

  useEffect(() => {
    const data = getCountries(COUNTRIES);
    setCountries(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full p-2">
      <p className="text-xl mb-2 font-medium text-gray-800">
        Popular Countries
      </p>

      {Object.entries(countries).map(([continent, countries]) => (
        <div key={continent} id={`#${continent}`}>
          <a href={`#${continent}`}>
            <i className="text-sm text-gray-400">{continent}</i>
          </a>

          <div className="grid grid-cols-2 my-5 md:grid-cols-4 gap-4">
            {countries.map((country) => (
              <CountryFlag
                key={country.code}
                name={country.name}
                code={country.code}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendCountries;
