import { useStore } from "@app/store/counter";

export function HomePage() {
  return <div></div>;
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
