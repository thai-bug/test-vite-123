/* eslint-disable @typescript-eslint/no-explicit-any */

const useContinent = () => {
  const getCountries = (countries: any[]) => {
    return countries.reduce(
      (acc, country) => {
        const { continent } = country;
        if (!acc[continent]) {
          acc[continent] = [];
        }
        acc[continent].push(country);
        return acc;
      },
      {} as Record<string, any[]>
    );
  };

  return {
    getCountries,
  };
};

export default useContinent;
