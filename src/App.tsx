import { useState } from "react";

import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { type Habit } from "./components/HabitItem";

const App = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: "Hi" },
    { id: 2, name: "Bye" },
  ]);

  const addHabit = (name: string) => {
    setHabits([
      ...habits,
      {
        id: crypto.randomUUID(),
        name,
      },
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} />
    </div>
  );
};

export default App;
