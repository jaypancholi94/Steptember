import { DataProps } from "@/components/step-table";
import { formatDate } from "@/lib/utils";
import {
  LineChart,
  CartesianGrid,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const StepChart = ({ data }: { data: DataProps[] }) => {
  const transformedData = data.map(({ date, steps }) => ({
    date: formatDate(date),
    steps,
  }));

  return (
    <div className="bg-white p-8 mt-4 rounded-lg w-full">
      <h2 className="text-xl  font-semibold mb-2 text-center">Steps Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={700} height={400} data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="steps" stroke="var(--primary)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export { StepChart };
