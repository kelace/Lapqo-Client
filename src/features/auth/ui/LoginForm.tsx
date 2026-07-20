import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginSchema, type LoginForm } from "@/shared/schemas/login.schema";
import { Button } from "@/shared/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/ui/card";
import { Field, FieldError, FieldLabel } from "@/shared/shadcn/ui/field";
import { Input } from "@/shared/shadcn/ui/input";
import { PasswordInput } from "@/shared/ui/password-input/PasswordInput";
import { useLogin } from "../model/useLogin";

export function LoginForm() {
  const { mutate: login, isPending } = useLogin();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => login(data);

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Login</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              placeholder="satanic@gmail.com"
              {...form.register("email")}
            />
            <FieldError
              errors={[form.formState.errors.email]}
              className="text-red-500"
            >
              {form.formState.errors.email?.message}
            </FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <PasswordInput
              id="password"
              placeholder="your password"
              {...form.register("password")}
            />

            <FieldError
              errors={[form.formState.errors.password]}
              className="text-red-500"
            >
              {form.formState.errors.password?.message}
            </FieldError>
          </Field>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Logging in..." : "Login"}
          </Button>

          <p className="text-muted-foreground flex items-center justify-center gap-2 text-center text-sm">
            <span>No account?</span>
            <Link to="/register" className="text-primary underline">
              Register
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
