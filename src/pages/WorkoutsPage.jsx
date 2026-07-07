export default function Workouts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Workouts</h1>
      <div className="space-y-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Morning Routine</h3>
              <p className="text-sm text-muted-foreground">30 minutes</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
              Beginner
            </span>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Full Body Blast</h3>
              <p className="text-sm text-muted-foreground">45 minutes</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
              Intermediate
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
