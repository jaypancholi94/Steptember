import { ChartLine, FootprintsIcon, Weight } from "lucide-react";
import CountUp from "react-countup";

const CurrentStatus = ({
  weight,
  totalSteps,
  numberOfEntries,
}: {
  weight: number;
  totalSteps: number;
  numberOfEntries: number;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 my-4">
      <div className="bg-orange-200 rounded-lg p-10 flex flex-col md:w-1/3">
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
      <div className="bg-orange-200 rounded-lg p-10 flex flex-col md:w-1/3">
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
      <div className="bg-orange-200 rounded-lg p-10 flex flex-col md:w-1/3">
        <p>Average Step Count</p>
        <div className="flex items-center gap-1">
          <ChartLine strokeWidth={2} />
          <CountUp
            start={0}
            end={totalSteps / numberOfEntries}
            duration={2.75}
            className="font-semibold text-4xl"
          ></CountUp>
        </div>
      </div>
    </div>
  );
};

export { CurrentStatus };
