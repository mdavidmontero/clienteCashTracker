export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(amount);
}

export function formatDate(isoString: string) {
  const date = new Date(isoString);
  const formatter = new Intl.DateTimeFormat("es-CO", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formatter.format(date);
}
