// Thay adapter này bằng API khi có backend. Không gửi dữ liệu ra mạng.
export function saveLocal<T>(key: string, value: T): void { window.localStorage.setItem(key, JSON.stringify(value)); }
export function readLocal(key: string): unknown { const raw = window.localStorage.getItem(key); return raw ? JSON.parse(raw) : null; }
export type ContactRequest = { id: string; name: string; email: string; phone: string; need: string; message: string; createdAt: string };
export async function submitInterest(request: ContactRequest): Promise<void> {
  const existing = readLocal('greenpulse:interests:v1');
  if (existing !== null && !Array.isArray(existing)) throw new Error('Dữ liệu lưu chưa hợp lệ.');
  saveLocal('greenpulse:interests:v1', [...(existing ?? []), request]);
}
