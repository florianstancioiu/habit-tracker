import HabitItem from "./HabitItem";
import { type Habit } from "./HabitItem";

export type HabitListProps = {
  habits: Habit[];
};

const HabitList = ({ habits }: HabitListProps) => {
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
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </ul>
  );
};

export default HabitList;
