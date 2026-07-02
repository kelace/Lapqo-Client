import { useState } from "react";
import type { ComponentProps } from "react"; // Що це блять ?
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/shared/shadcn/ui/input";

type PasswordInputProps = ComponentProps<typeof Input>;

export function PasswordInput(props: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input type={show ? "text" : "password"} {...props} />
      <button
        type="button"
        className="absolute top-1/2 right-3 -translate-y-1/2"
        onClick={() => setShow((s) => !s)}
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}
