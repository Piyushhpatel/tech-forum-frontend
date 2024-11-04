import { useEffect, useState } from 'react'

export default function MainLoader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10
        if (newProgress === 100) {
          clearInterval(timer)
        }
        return newProgress > 100 ? 100 : newProgress
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <div className="w-full max-w-md p-8 space-y-8 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-800 dark:from-slate-400 dark:to-slate-100 animate-pulse">
          CrackedNerds
        </h1>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-300 dark:bg-slate-700">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-500 dark:bg-slate-400 transition-all duration-500 ease-out"
            ></div>
          </div>
        </div>
        <div className="text-slate-600 dark:text-slate-300 animate-bounce">
          <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-lg font-medium">
          Ask from cracked people, one discussion at a time...
        </p>
      </div>
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}