import { cn, formatDate } from "@/lib/utils";
import { Calendar, Footprints, Hash } from "lucide-react";

export type DataProps = { date: Date; steps: number };

type StepTableProps = {
  className?: string;
  data: DataProps[];
};

const StepTable: React.FC<StepTableProps> = ({ className, data }) => {
  const spacingStyle = "py-4 border-dashed border-t-2";

  if (!data.length)
    return (
      <p className="text-center px-6 py-8 opacity-90">
        Did your legs go on vacation? 🏖️ No steps today, but there&apos;s always
        tomorrow!
      </p>
    );

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
          <tr key={`${row.date}-${row.steps}`}>
            <td className={cn("w-[5%] opacity-50 pl-1", spacingStyle)}>
              {data.length - index}
            </td>

            <td className={cn("w-[40%] opacity-80", spacingStyle)}>
              {formatDate(row.date)}
            </td>
            <td className={cn("w-[55%] opacity-80 text-right", spacingStyle)}>
              {row.steps.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { StepTable };
