import { FootprintsIcon, Weight } from "lucide-react";
import CountUp from "react-countup";

const CurrentStatus = ({
  weight,
  totalSteps,
}: {
  weight: number;
  totalSteps: number;
}) => {
  return (
    <div className="flex gap-2 my-4">
      <div className="bg-orange-200 rounded-lg p-10 flex flex-col w-1/2">
        <p>Weight</p>
        <div className="flex items-end gap-1">
          <div className="flex items-center gap-1">
            <Weight strokeWidth={2} />
            <CountUp
              start={0}
              end={weight}
              duration={2.75}
              className="font-semibold text-4xl"
            ></CountUp>
          </div>
          <span>kg</span>
        </div>
      </div>
      <div className="bg-orange-200 rounded-lg p-10 flex flex-col w-1/2">
        <p>Total Steps</p>
        <div className="flex items-center gap-1">
          <FootprintsIcon strokeWidth={2} />
          <CountUp
            start={0}
            end={totalSteps}
            duration={2.75}
            className="font-semibold text-4xl"
          ></CountUp>
        </div>
      </div>
    </div>
  );
};

export { CurrentStatus };
