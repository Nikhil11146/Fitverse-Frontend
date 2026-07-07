export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">About</h1>
      <div className="max-w-2xl">
        <p className="text-muted-foreground mb-4">
          FitTrack is your personal fitness companion designed to help you track
          exercises, plan workouts, and achieve your health goals.
        </p>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>Track your exercises and progress</li>
            <li>Create and manage custom workouts</li>
            <li>Monitor your fitness journey</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
