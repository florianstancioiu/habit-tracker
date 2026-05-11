import { useState, type SubmitEvent } from "react";
import Button from "./UI/Button";
import { useHabitContext } from "../context/HabitProvider";

const HabitForm = () => {
  const { addHabit } = useHabitContext();
  const [name, setName] = useState("");

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    if (name.trim() === "") {
      return;
    }

    addHabit(name);
    setName("");
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        placeholder="New habit..."
      />
      <Button
        disabled={name.trim() === ""}
        className="rounded-lg px-4 py-2 font-medium"
      >
        Add Habit
      </Button>
    </form>
  );
};

export default HabitForm;
