import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/shared/shadcn/ui/label";
import { Input } from "@/shared/shadcn/ui/input";
import { Button } from "@/shared/shadcn/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/shadcn/ui/card";

import { registerSchema, type RegisterForm } from "@/shared/schemas/register.schema";
import { useRegister } from "@/shared/hooks/query/useRegister";

export function RegisterPage() {
  const navigate = useNavigate();
  const register = useRegister();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    register.mutate(data, {
      onSuccess: () => {
        navigate("/login");
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <RegisterFormUI form={form} onSubmit={onSubmit} />
    </div>
  );
}

function RegisterFormUI({ form, onSubmit }: { form: any; onSubmit: any }) {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Create account</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Satanic" {...form.register("name")} />
            {form.formState.errors.name && <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="satanic@gmail.com" {...form.register("email")} />
            {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" {...form.register("password")} />
            {form.formState.errors.password && <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input id="confirmPassword" type="password" placeholder="••••••••" {...form.register("confirmPassword")} />
            {form.formState.errors.confirmPassword && <p className="text-sm text-red-500">{form.formState.errors.confirmPassword.message}</p>}
          </div>

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
