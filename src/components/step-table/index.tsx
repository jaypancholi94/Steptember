import { cn } from "@/lib/utils";
import { Calendar, Footprints, Hash } from "lucide-react";

type StepTableProps = {
  className?: string;
  data: { date: string; stepCount: number }[];
};

const StepTable: React.FC<StepTableProps> = ({ className, data }) => {
  const spacingStyle = "py-4 border-dashed border-t-2";
  return (
    <table className={cn("w-full mt-6", className)}>
      <thead>
        <tr>
          <th className="opacity-50 pb-4">
            <Hash size={18} />
          </th>
          <th className="opacity-80 pb-4">
            <Calendar size={18} />
          </th>
          <th className="opacity-80 flex justify-end pb-4">
            <Footprints size={18} />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={`${row.date}-${row.stepCount}`}>
            <td className={cn("w-[5%] opacity-50 pl-1", spacingStyle)}>
              {data.length - index}
            </td>

            <td className={cn("w-[40%] opacity-80", spacingStyle)}>
              {row.date}
            </td>
            <td className={cn("w-[55%] opacity-80 text-right", spacingStyle)}>
              {row.stepCount.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { StepTable };
