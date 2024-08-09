import { Image } from "@arco-design/mobile-react";
import { Link } from "@tanstack/react-router";

interface CountryFlagProps {
  name: string;
  code: string;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ name, code }) => {
  return (
    <Link to={`/packages?code=${code}`}>
      <div className="flex items-center space-x-2">
        <Image
          src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
          alt={name}
          className="rounded-[50%]"
        />
        <span className="text-sm text-gray-800">{name}</span>
      </div>
    </Link>
  );
};

export default CountryFlag;
