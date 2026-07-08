import {useAuth} from "../context/AuthContext.jsx";

export default function WorkoutContainer({ workout, exercises }) {
    const { user } = useAuth();
    return (
        <div className="workout-container">
            <h1>{workout.name}</h1>
            <p>{workout.description}</p>
            <p>{workout.ownerId}</p>

            <div className="exercises-container">
                {
                    exercises.map((exercise, index) => {
                        return (
                            <div key={index} className="exercise-container">
                                <h4>{exercise.name}</h4>
                                <div className="exercise-info-container">
                                    <p>{exercise.category}</p>
                                    <p>{exercise.primaryMuscleGroup}</p>
                                    <p>{exercise.secondaryMuscleGroup}</p>
                                    <p>{exercise.mechanic}</p>
                                    <p>{exercise.movementPattern}</p>
                                    <p>{exercise.difficulty}</p>
                                </div>
                                <p>{exercise.description}</p>
                                <p>{exercise.instructions}</p>
                                <p>{exercise.isEquipmentBased}</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                workout.ownerId === user._id && (
                    <div className="workout-function-container">
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>

                )
            }
        </div>
    )
}