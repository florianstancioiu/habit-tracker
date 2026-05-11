import { createContext, useContext, type ReactNode } from "react";
import { isSameDay } from "date-fns";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Habit = {
  id: string | number;
  name: string;
  completions: Date[];
};

type Context = {
  habits: Habit[];
  addHabit: (name: string) => void;
  deleteHabit: (id: Habit["id"]) => void;
  toggleHabit: (id: Habit["id"], date: Date) => void;
};

const HabitContext = createContext<null | Context>(null);

type HabitProviderProps = {
  children: ReactNode;
};

export function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabits] = useLocalStorage<Habit[]>("habits", []);

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
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        deleteHabit,
        toggleHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
}

export function useHabitContext() {
  const context = useContext(HabitContext);

  if (!context) {
    throw new Error("useHabitContext must be used within <HabitProvider />");
  }

  return context;
}
