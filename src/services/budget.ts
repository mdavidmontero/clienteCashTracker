import { cache } from "react";
import getToken from "../auth/token";
import { notFound } from "next/navigation";
import { Budget, BudgetAPIResponseSchema } from "../schemas";

export const getBudget = cache(async (budgetId: Budget["id"]) => {
  const token = getToken();
  const url = `${process.env.API_URL}/budgets/${budgetId}`;
  const req = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await req.json();
  if (!req.ok) {
    notFound();
  }
  const budget = BudgetAPIResponseSchema.parse(json);
  return budget;
});
