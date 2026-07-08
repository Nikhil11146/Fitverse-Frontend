import {useForm} from "react-hook-form";
import {useState} from "react";
import {useWorkout} from "../context/WorkoutContext.jsx";
import WorkoutContainer from "../compenents/WorkoutContainer.jsx";
import {useExercise} from "../context/ExerciseContext.jsx";

export default function workoutCreateAIPage() {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm();
    const {createWorkoutAI} = useWorkout();
    const [loading, setLoading] = useState(false);
    const [workout, setWorkout] = useState(null);
    const [exercises, setExercises] = useState([]);
    const { fetchExercise } = useExercise();


    async function createWorkoutAIFunc(data) {
        try {
            setLoading(true);
            const res = await createWorkoutAI(data);
            setWorkout(res);
            const exerciseData = await Promise.all(
                res.exercises.map(exercise => fetchExercise(exercise.exercise))
            )
            setExercises(exerciseData);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="workout-create-ai-page">
            <h1>Create Workout using AI</h1>
            <form onSubmit={handleSubmit(createWorkoutAIFunc)}>
                <input placeholder="Prompt..." className="prompt-input custom-input-1" {...register("prompt", {required: true})}/>
                <button type="submit">Create</button>
            </form>
            {loading ? (
                <p>Loading...</p>
            ) : (
                (workout && <WorkoutContainer workout={workout} exercises={exercises}/>)
            )}
        </div>
    )
}