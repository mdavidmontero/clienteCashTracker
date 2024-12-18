"use server";

import getToken from "@/src/auth/token";
import {
  ErrorResponseSchema,
  SuccessSchema,
  UpdatePasswordSchema,
} from "@/src/schemas";

type ActionStateType = {
  errors: string[];
  success: string;
};
export async function updatePassword(
  prevState: ActionStateType,
  formData: FormData
) {
  const updateFormData = {
    current_password: formData.get("current_password") as string,
    password: formData.get("password") as string,
    password_confirmation: formData.get("password_confirmation") as string,
  };
  const userPassword = UpdatePasswordSchema.safeParse(updateFormData);

  if (!userPassword.success) {
    return {
      errors: userPassword.error.issues.map((issue) => issue.message),
      success: "",
    };
  }

  const token = getToken();
  const url = `${process.env.API_URL}/auth/update-password`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      current_password: updateFormData.current_password,
      password: updateFormData.password,
    }),
  });
  const json = await req.json();

  if (!req.ok) {
    const { error } = ErrorResponseSchema.parse(json);
    return {
      errors: [error],
      success: "",
    };
  }
  const success = SuccessSchema.parse(json);

  return {
    errors: [],
    success,
  };
}
