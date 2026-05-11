import HabitItem from "./HabitItem";
import { useHabitContext } from "../context/HabitProvider";

export type HabitListProps = {
  visibleDates: Date[];
};

const HabitList = ({ visibleDates }: HabitListProps) => {
  const { habits } = useHabitContext();

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
        <HabitItem key={habit.id} habit={habit} visibleDates={visibleDates} />
      ))}
    </ul>
  );
};

export default HabitList;
