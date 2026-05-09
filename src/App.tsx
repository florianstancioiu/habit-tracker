import { useState } from "react";

import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { type Habit } from "./components/HabitItem";
import { isSameDay } from "date-fns";

const App = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string) => {
    setHabits([
      ...habits,
      {
        id: crypto.randomUUID(),
        name,
        completions: [],
      },
    ]);
  };

  const deleteHabit = (id: Habit["id"]) => {
    setHabits((values) => values.filter((habit) => habit.id !== id));
  };

  const toggleHabit = (id: Habit["id"], date: Date) => {
    setHabits((values) =>
      values.map((habit) => {
        if (habit.id !== id) {
          return habit;
        }

        const alreadyDone = habit.completions.some((c) => isSameDay(c, date));
        const completions = alreadyDone
          ? habit.completions.filter((c) => !isSameDay(c, date))
          : [...habit.completions, date];

        return {
          ...habit,
          completions,
        };
      }),
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList
        habits={habits}
        deleteHabit={deleteHabit}
        toggleHabit={toggleHabit}
      />
    </div>
  );
};

export default App;
