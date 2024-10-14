import { FootIcon } from "./foot";

const Header: React.FC = () => {
  return (
    <div className="w-full px-4 py-4 flex gap-6 items-center">
      <FootIcon width={68} height={68} className={"text-primary"} />
      <div className="flex flex-col">
        <h4 className="text-2xl font-bold text-primary">Steptember</h4>
        <h6 className="text-sm font-semibold opacity-80">
          Track. Step. Conquer.
        </h6>
      </div>
    </div>
  );
};

export { Header };
