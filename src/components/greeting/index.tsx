import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import React, { memo, useMemo } from 'react';

const Greeting: React.FC = memo(() => {
  const { name } = useSelector((state: RootState) => ({
    name: state.user.name,
  }));

  const greetingMessage = useMemo(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) return 'Good morning ☀️';
    if (currentHour < 18) return 'Good afternoon 🌤️';
    return 'Good evening 🌙';
  }, []);

  return (
    <div className="flex gap-2 flex-wrap">
      <h2 className="text-4xl font-bold text-nowrap">{greetingMessage},</h2>
      <h2 className="text-4xl font-bold">{name}!</h2>
    </div>
  );
});

Greeting.displayName = 'Greeting';

export { Greeting };
