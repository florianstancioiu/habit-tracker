import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { useHabitContext } from "./context/HabitProvider";

const App = () => {
  const { habits } = useHabitContext();

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm />
      <HabitList habits={habits} />
    </div>
  );
};

export default App;
