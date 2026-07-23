import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  registerSchema,
  type RegisterForm,
} from "@/shared/schemas/register.schema";
import { Button } from "@/shared/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/ui/card";
import { Field, FieldError, FieldLabel } from "@/shared/shadcn/ui/field";
import { Input } from "@/shared/shadcn/ui/input";
import { useRegister } from "../model/use-register";

export function RegisterForm() {
  const register = useRegister();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => register.mutate(data);

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Create account</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              placeholder="Your name"
              {...form.register("name")}
            />
            <FieldError
              errors={[form.formState.errors.name]}
              className="text-red-500"
            >
              {form.formState.errors.name?.message}
            </FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              placeholder="your@gmail.com"
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
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...form.register("password")}
            />
            <FieldError
              errors={[form.formState.errors.password]}
              className="text-red-500"
            >
              {form.formState.errors.password?.message}
            </FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm password</FieldLabel>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              {...form.register("confirmPassword")}
            />
            <FieldError
              errors={[form.formState.errors.confirmPassword]}
              className="text-red-500"
            >
              {form.formState.errors.confirmPassword?.message}
            </FieldError>
          </Field>

          <Button type="submit" className="w-full">
            Register
          </Button>

          <p className="text-muted-foreground text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-primary underline">
              Login
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
