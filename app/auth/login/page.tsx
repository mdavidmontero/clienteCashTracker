import type { Metadata } from "next";

import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Cash Tracker - Inicia Sesión",
  description: "Iniciar sesión",
};

export default function LoginPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Iniciar Sesión</h1>
      <p className="text-3xl font-bold">
        y controla tus <span className="text-amber-500">finanzas</span>
      </p>
      <LoginForm />
      <nav className="mt-10 flex flex-col space-y-4">
        <Link href="/auth/register" className="text-center text-gray-500">
          ¿No tienes cuenta? Crea una
        </Link>

        <Link
          href="/auth/forgot-password"
          className="text-center text-gray-500"
        >
          ¿Olvidaste tu contraseña? Reestablecer
        </Link>
      </nav>
    </>
  );
}