import HabitItem from "./HabitItem";
import { type Habit } from "./HabitItem";

export type HabitListProps = {
  habits: Habit[];
  deleteHabit: (id: Habit["id"]) => void;
  toggleHabit: (id: Habit["id"], date: Date) => void;
};

const HabitList = ({ habits, deleteHabit, toggleHabit }: HabitListProps) => {
  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one to get started!
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3 list-none">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          deleteHabit={deleteHabit}
          toggleHabit={toggleHabit}
        />
      ))}
    </ul>
  );
};

export default HabitList;
