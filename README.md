# Habit Tracker

A small React + TypeScript + Tailwind project

## Things that I've learned while watching the video

1. You can create ids for list items using `crypto.randomUUID()` method
2. When you are creating multiple "types" of a certain component you should use `variant` as the prop that distinguishes between the types
3. There's no need to create an initial context object, I can just use `null` as the default value for the context

```ts
type Context = {
  habits: Habit[];
  addHabit: (name: string) => void;
  deleteHabit: (id: Habit["id"]) => void;
  toggleHabit: (id: Habit["id"], date: Date) => void;
};

const HabitContext = createContext<null | Context>(null);
```

**Note:** This works only with the `useHabitContext` hook, that checks for null:

```ts
export function useHabitContext() {
  const context = useContext(HabitContext);

  if (!context) {
    throw new Error("useHabitContext must be used within <HabitProvider />");
  }

  return context;
}
```
