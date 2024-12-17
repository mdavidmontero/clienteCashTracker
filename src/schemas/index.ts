import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().min(1, "Email es obligatorio").email("Email no válido"),
    name: z.string().min(1, "Tu nombre no puede ser vacío"),
    password: z.string().min(8, "Contraseña debe tener al menos 6 caracteres"),
    password_confirmation: z
      .string()
      .min(8, "Contraseña debe tener al menos 6 caracteres"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Las contraseñas no coinciden",
    path: ["password_confirmation"],
  });

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "El Email es Obligatorio" })
    .email({ message: "Email no válido" }),
  password: z.string().min(1, { message: "El Password no puede ir vacio" }),
});

export const TokenSchema = z
  .string({ message: "Token no valido" })
  .length(6, { message: "Token no valido" });

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "El Email es Obligatorio" })
    .email({ message: "Email no válido" }),
});

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "El Password debe ser de al menos 8 caracteres" }),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Los Passwords no son iguales",
    path: ["password_confirmation"],
  });

export const SuccessSchema = z.string();

export const ErrorResponseSchema = z.object({
  error: z.string(),
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;
