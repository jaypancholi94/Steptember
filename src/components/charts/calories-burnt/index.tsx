import { formatDate } from '@/lib/utils';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { DataProps } from '@/components/step-table';
import { memo, useCallback, useMemo } from 'react';

type CaloriesBurntProps = { data: DataProps[]; weight: number };

const CaloriesBurnt: React.FC<CaloriesBurntProps> = memo(({ data, weight }) => {
  const calculateCalories = useCallback(
    (steps: number) => {
      let caloriesBurnt = 0;
      if (weight <= 50) caloriesBurnt = 0.04;
      if (weight > 50 && weight <= 70) caloriesBurnt = 0.05;
      if (weight > 70) caloriesBurnt = 0.06;
      return steps * caloriesBurnt;
    },
    [weight]
  );
  const transformedData = useMemo(
    () =>
      data.map(({ date, steps }) => ({
        date: formatDate(date),
        steps,
        calories: calculateCalories(steps),
      })),
    [data, calculateCalories]
  );
  return (
    <div className="bg-white p-8 mt-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2 text-center">Calories Burnt</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={700} height={400} data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="calories" fill="var(--primary)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

CaloriesBurnt.displayName = 'CaloriesBurnt';

export { CaloriesBurnt };
