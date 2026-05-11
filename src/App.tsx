import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { useState } from "react";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";

const App = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const week = addWeeks(new Date(), weekOffset);

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  });

  const onPrevHandler = () => setWeekOffset((o) => o - 1);
  const onNextHandler = () => setWeekOffset((o) => o + 1);

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header
        visibleDates={visibleDates}
        onPrev={onPrevHandler}
        onNext={onNextHandler}
      />
      <HabitForm />
      <HabitList visibleDates={visibleDates} />
    </div>
  );
};

export default App;
