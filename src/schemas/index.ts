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

export const SuccessSchema = z.string();

export const ErrorResponseSchema = z.object({
  error: z.string(),
});

export const TokenSchema = z
  .string({ message: "Token no valido" })
  .length(6, { message: "Token no valido" });
