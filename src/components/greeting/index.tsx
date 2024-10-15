import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Greeting: React.FC = () => {
  const name = useSelector((state: RootState) => state.user.name);

  const getGreeting = (): string => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) return "Good morning ☀️";

    if (currentHour < 18) return "Good afternoon 🌤️";

    return "Good evening 🌙";
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <h2 className="text-xl font-bold text-nowrap">{getGreeting()},</h2>
      <h2 className="text-xl font-bold">{name}!</h2>
    </div>
  );
};
export { Greeting };
