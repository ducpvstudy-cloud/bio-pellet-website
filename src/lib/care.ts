export type Plant = { id: string; name: string; group: string; potSize: number; startDate: string; interval: number; notes: string; lastCare: string | null };
export const groups = ['Cây lá trong nhà', 'Cây để bàn', 'Sen đá & xương rồng', 'Cây ban công', 'Nhóm khác'];
export function localDate(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
export function isDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00`);
  return !Number.isNaN(date.getTime()) && localDate(date) === value;
}
export function isPlant(value: unknown): value is Plant {
  if (!value || typeof value !== 'object') return false;
  const p = value as Partial<Plant>;
  return typeof p.id === 'string' && typeof p.name === 'string' && p.name.trim().length > 0 && typeof p.group === 'string' && groups.includes(p.group) && typeof p.potSize === 'number' && p.potSize > 0 && p.potSize <= 300 && isDate(p.startDate) && Number.isInteger(p.interval) && p.interval! >= 1 && p.interval! <= 365 && typeof p.notes === 'string' && (p.lastCare === null || isDate(p.lastCare));
}
export function addDays(value: string, days: number): string {
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate()+days);
  return localDate(date);
}
export function nextCare(plant: Plant): string { return plant.lastCare ? addDays(plant.lastCare, plant.interval) : plant.startDate; }
export function formatDate(value: string): string { return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(`${value}T12:00:00`)); }
