'use client';
import { CalendarDays, Check, Leaf, Sun } from 'lucide-react';
import { Botanical } from './visuals';
import { addDays, formatDate, nextCare, type Plant } from '@/lib/care';

export function CareAgenda({ plants, today, onComplete }: { plants: Plant[]; today: string; onComplete: (plant: Plant) => void }) {
  const date = new Date(`${today}T12:00:00`);
  const weekday = date.getDay() || 7;
  const weekStart = addDays(today, 1 - weekday);
  const tasks = plants.filter(p => nextCare(p) <= today || p.lastCare === today);
  return <div className="care-agenda-layout"><section className="today-agenda" aria-labelledby="today-agenda-title"><div className="agenda-title"><div><span className="eyebrow">MỘT CHÚT QUAN TÂM</span><h2 id="today-agenda-title">Hôm nay, chăm điều xanh.</h2></div><Sun size={28} strokeWidth={1.3} /></div>
    {tasks.length === 0 ? <div className="today-clear"><Leaf size={28} strokeWidth={1.3} /><p>{plants.length ? 'Hôm nay chưa có lịch cần hoàn thành.' : 'Chưa có lịch chăm cây. Thêm chậu cây để tự đặt nhịp chăm sóc của bạn.'}<span>Quan sát lá và độ ẩm đất luôn là một khởi đầu tốt.</span></p></div> : <ul className="today-tasks">{tasks.map(p => <li className={p.lastCare === today ? 'done' : ''} key={p.id}><button aria-label={`Hoàn thành lịch hôm nay của ${p.name}`} disabled={p.lastCare === today} onClick={() => onComplete(p)}>{p.lastCare === today && <Check size={16} />}</button><div><strong>{p.name}</strong><span>{p.lastCare === today ? 'Đã chăm hôm nay' : `Lịch đã đặt: ${formatDate(nextCare(p))}`}</span></div><span className="agenda-task-label">{p.lastCare === today ? 'Hoàn thành' : 'Chờ chăm'}</span></li>)}</ul>}
  </section><section className="week-agenda" aria-labelledby="week-agenda-title"><div className="week-title"><h3 id="week-agenda-title">Tuần của góc xanh</h3><CalendarDays size={19} strokeWidth={1.5} /></div><div className="actual-week">{['T2','T3','T4','T5','T6','T7','CN'].map((label,i) => { const day = addDays(weekStart,i); const hasTask = plants.some(p => nextCare(p) === day); return <div className={day === today ? 'active' : ''} key={day} aria-label={`${formatDate(day)}${day === today ? ', hôm nay' : ''}${hasTask ? ', có lịch chăm cây' : ''}`}><span>{label}</span><strong>{Number(day.slice(-2))}</strong><i className={hasTask ? 'has-task' : ''}/></div>; })}</div><div className="week-motto"><div><p>Chậm lại một chút.<br /><em>Gần thiên nhiên hơn.</em></p><span>Lịch do bạn thiết lập.</span></div><Botanical /></div></section></div>;
}
