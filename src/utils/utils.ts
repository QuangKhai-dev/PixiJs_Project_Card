import { format } from 'date-fns';

export function getTime() {
  const date = format(new Date(), 'dd/MM/yyyy, HH:mm:ss');
  return date;
}
