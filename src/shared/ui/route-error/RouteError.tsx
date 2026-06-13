type RouteErrorProps = {
  message?: string;
};

export function RouteError({ message = "Invalid route" }: RouteErrorProps) {
  return <div className="p-6 text-center text-gray-500">{message}</div>;
}
