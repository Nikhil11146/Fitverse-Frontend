export default function Exercises() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Exercises</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-2">Push-ups</h3>
          <p className="text-sm text-muted-foreground">Upper body strength</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-2">Squats</h3>
          <p className="text-sm text-muted-foreground">Lower body strength</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-2">Running</h3>
          <p className="text-sm text-muted-foreground">Cardio endurance</p>
        </div>
      </div>
    </div>
  )
}
