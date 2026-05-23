import { useStore } from "@app/store/counter";

export function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const { count, inc } = useStore();
  return (
    <div>
      <button onClick={inc}>one up</button>
      <span>{count}</span>
    </div>
  );
}
