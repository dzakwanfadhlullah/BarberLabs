'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DatePickerProps {
  selected: Date | null;
  onSelect: (date: Date) => void;
  closedDays?: number[]; // 0=Sun, 1=Mon...
}

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function DatePicker({ selected, onSelect, closedDays = [0, 1] }: DatePickerProps) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  // For mobile: week view
  const [weekStart, setWeekStart] = useState(() => {
    const d = new Date(today);
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day; // Monday start
    d.setDate(d.getDate() + diff);
    return d;
  });

  const isDisabled = (date: Date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    if (d < today) return true;
    if (closedDays.includes(d.getDay())) return true;
    return false;
  };

  const isSameDay = (a: Date | null, b: Date) => {
    if (!a) return false;
    return a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
  };

  const isToday = (date: Date) => isSameDay(today, date);

  // Desktop: Monthly calendar
  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    const lastDay = new Date(viewYear, viewMonth + 1, 0);
    let startDow = firstDay.getDay();
    startDow = startDow === 0 ? 6 : startDow - 1; // Monday start

    const days: (Date | null)[] = [];
    for (let i = 0; i < startDow; i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(viewYear, viewMonth, d));
    }
    return days;
  }, [viewMonth, viewYear]);

  // Mobile: Week days
  const weekDays = useMemo(() => {
    const days: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      days.push(d);
    }
    return days;
  }, [weekStart]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const prevWeek = () => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() - 7);
    setWeekStart(d);
  };

  const nextWeek = () => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + 7);
    setWeekStart(d);
  };

  return (
    <>
      {/* Desktop: Monthly Calendar */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between mb-4">
          <button type="button" onClick={prevMonth} className="p-1 hover:bg-[var(--color-gray-100)] transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[15px] font-semibold text-black">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </span>
          <button type="button" onClick={nextMonth} className="p-1 hover:bg-[var(--color-gray-100)] transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-0">
          {DAY_NAMES.map((name) => (
            <div key={name} className="text-center text-[12px] font-medium text-[var(--color-text-muted)] pb-2">
              {name}
            </div>
          ))}
          {calendarDays.map((day, i) => {
            if (!day) return <div key={`empty-${i}`} />;
            const disabled = isDisabled(day);
            const sel = isSameDay(selected, day);
            const tod = isToday(day);

            return (
              <button
                key={day.toISOString()}
                type="button"
                disabled={disabled}
                onClick={() => !disabled && onSelect(day)}
                className={`h-10 text-[14px] tabular-nums transition-all duration-180 ${
                  sel
                    ? 'bg-black text-white font-semibold'
                    : disabled
                    ? 'text-[var(--color-gray-300)] cursor-not-allowed'
                    : tod
                    ? 'font-semibold text-black hover:bg-[var(--color-gray-100)]'
                    : 'text-black hover:bg-[var(--color-gray-100)]'
                }`}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile: Weekly Date Strip */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <button type="button" onClick={prevWeek} className="p-1">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[14px] font-semibold text-black">
            {MONTH_NAMES[weekDays[0].getMonth()]} {weekDays[0].getFullYear()}
          </span>
          <button type="button" onClick={nextWeek} className="p-1">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {weekDays.map((day) => {
            const disabled = isDisabled(day);
            const sel = isSameDay(selected, day);
            const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day.getDay()];
            const monthName = MONTH_NAMES[day.getMonth()].slice(0, 3).toUpperCase();

            return (
              <button
                key={day.toISOString()}
                type="button"
                disabled={disabled}
                onClick={() => !disabled && onSelect(day)}
                className={`flex flex-col items-center py-3 transition-all duration-180 ${
                  sel
                    ? 'bg-black text-white'
                    : disabled
                    ? 'text-[var(--color-gray-300)] cursor-not-allowed'
                    : 'text-black hover:bg-[var(--color-gray-100)]'
                }`}
              >
                <span className="text-[11px] font-medium">{dayName}</span>
                <span className="text-[18px] font-bold mt-0.5">{day.getDate()}</span>
                <span className="text-[10px] mt-0.5">{monthName}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
