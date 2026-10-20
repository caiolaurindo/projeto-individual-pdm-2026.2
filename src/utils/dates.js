function formatDate(value) {
  if (!value) return null;

  return new Intl.DateTimeFormat('pt-BR', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value));
}

export function formatPeriod(start, end, ongoing) {
  const startDate = formatDate(start);
  const endDate = ongoing ? 'Atual' : formatDate(end);

  if (startDate && endDate) return `${startDate} — ${endDate}`;
  return startDate || endDate || 'Período não informado';
}
