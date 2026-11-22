import test from 'node:test';
import assert from 'node:assert/strict';
import { addDays, isDate, isPlant, nextCare, type Plant } from '../src/lib/care.ts';
const plant: Plant = { id:'test',name:'Trầu bà',group:'Cây để bàn',potSize:15,startDate:'2026-11-20',interval:7,notes:'',lastCare:null };
test('ngày chăm đầu tiên là ngày bắt đầu do người dùng đặt', () => { assert.equal(nextCare(plant),'2026-11-20'); });
test('đánh dấu đã chăm tính lại lịch theo ngày hoàn thành', () => { assert.equal(nextCare({...plant,lastCare:'2026-11-22'}),'2026-11-29'); });
test('cộng ngày qua tháng, năm và năm nhuận', () => { assert.equal(addDays('2026-12-28',7),'2027-01-04'); assert.equal(addDays('2028-02-28',1),'2028-02-29'); });
test('loại dữ liệu lưu trữ không hợp lệ trước khi dùng', () => { assert.ok(isPlant(plant)); assert.equal(isPlant({...plant,interval:0}),false); assert.equal(isPlant({...plant,potSize:-1}),false); assert.equal(isPlant({...plant,startDate:'2026-02-30'}),false); assert.equal(isPlant({...plant,lastCare:'invalid'}),false); assert.equal(isPlant(null),false); });
test('kiểm tra ngày không tự cuộn ngày sai sang tháng kế', () => { assert.equal(isDate('2026-02-29'),false); assert.equal(isDate('2028-02-29'),true); });
