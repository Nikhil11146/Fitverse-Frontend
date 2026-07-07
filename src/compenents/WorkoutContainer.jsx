export default function WorkoutContainer({ workout }) {
    return (
        <div className="workout-container">
            <h1>{workout.name}</h1>
            <p>{workout.description}</p>
            <p>{workout.ownerId}</p>
        </div>
    )
}