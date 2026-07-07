import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Welcome to FitTrack
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          Track your workouts, manage exercises, and achieve your fitness goals.
        </p>
        <div className="flex gap-4">
          <Link
            to="/exercises"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Exercises
          </Link>
          <Link
            to="/workouts"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View Workouts
          </Link>
        </div>
      </div>
    </div>
  )
}
