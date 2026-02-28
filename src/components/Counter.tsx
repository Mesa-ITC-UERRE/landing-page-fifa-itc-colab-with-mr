import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

type CounterProps = {
  targetDate: Date | string | number
  className?: string
}

type TimeLeft = {
  totalMilliseconds: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

const SECOND_IN_MS = 1000
const MINUTE_IN_MS = 60 * SECOND_IN_MS
const HOUR_IN_MS = 60 * MINUTE_IN_MS
const DAY_IN_MS = 24 * HOUR_IN_MS

const COUNTER_LABELS: Array<{ key: keyof Omit<TimeLeft, 'totalMilliseconds'>; label: string }> = [
  { key: 'days', label: 'Dias' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Minutos' },
  { key: 'seconds', label: 'Segundos' },
]

function normalizeTargetDate(targetDate: CounterProps['targetDate']) {
  if (targetDate instanceof Date) {
    return targetDate.getTime()
  }

  return new Date(targetDate).getTime()
}

function getTimeLeft(targetTime: number): TimeLeft {
  const totalMilliseconds = Math.max(targetTime - Date.now(), 0)

  return {
    totalMilliseconds,
    days: Math.floor(totalMilliseconds / DAY_IN_MS),
    hours: Math.floor((totalMilliseconds % DAY_IN_MS) / HOUR_IN_MS),
    minutes: Math.floor((totalMilliseconds % HOUR_IN_MS) / MINUTE_IN_MS),
    seconds: Math.floor((totalMilliseconds % MINUTE_IN_MS) / SECOND_IN_MS),
  }
}

function formatUnit(value: number) {
  return value.toString().padStart(2, '0')
}

export const Counter = ({ targetDate, className }: CounterProps) => {
  const targetTime = normalizeTargetDate(targetDate)
  const isValidDate = Number.isFinite(targetTime)

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    isValidDate
      ? getTimeLeft(targetTime)
      : {
          totalMilliseconds: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
  )

  useEffect(() => {
    if (!isValidDate) {
      return
    }

    setTimeLeft(getTimeLeft(targetTime))

    const intervalId = window.setInterval(() => {
      setTimeLeft((currentTimeLeft) => {
        if (currentTimeLeft.totalMilliseconds <= 0) {
          window.clearInterval(intervalId)
          return currentTimeLeft
        }

        const nextTimeLeft = getTimeLeft(targetTime)

        if (nextTimeLeft.totalMilliseconds <= 0) {
          window.clearInterval(intervalId)
        }

        return nextTimeLeft
      })
    }, SECOND_IN_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isValidDate, targetTime])

  if (!isValidDate) {
    return (
      <p className={cn('text-center text-sm font-base text-foreground', className)}>
        La fecha del contador no es valida.
      </p>
    )
  }

  return (
    <section
      aria-label="Cuenta regresiva para el torneo"
      className={cn(
        'w-full max-w-4xl rounded-base border-2 border-border bg-secondary-background px-4 py-5 shadow-shadow sm:px-6',
        className,
      )}
    >
      <div className="mb-4 text-center">
        <p className="text-xs font-heading uppercase tracking-[0.35em] text-foreground/70">
          Cuenta regresiva
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {COUNTER_LABELS.map(({ key, label }) => (
          <article
            key={key}
            className="rounded-base border-2 border-border bg-main px-4 py-5 text-main-foreground shadow-shadow"
          >
            <p
              suppressHydrationWarning
              className="text-center font-heading text-4xl leading-none sm:text-5xl"
            >
              {formatUnit(timeLeft[key])}
            </p>
            <p className="mt-3 text-center text-xs font-base uppercase tracking-[0.3em] text-main-foreground/80">
              {label}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
