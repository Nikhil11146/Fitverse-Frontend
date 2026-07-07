import {useForm} from "react-hook-form";
import {useState} from "react";
import {useWorkout} from "../context/WorkoutContext.jsx";
import WorkoutContainer from "../compenents/WorkoutContainer.jsx";

export default function workoutCreateAIPage() {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm();
    const {createWorkoutAI} = useWorkout();
    const [workout, setWorkout] = useState(null);


    async function createWorkoutAIFunc(data) {
        try {
            const res = await createWorkoutAI(data);
            setWorkout(res);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="workout-create-ai-page">
            <h1>Create Workout using AI</h1>
            <form onSubmit={handleSubmit(createWorkoutAIFunc)}>
                <input placeholder="Prompt..." className="prompt-input" {...register("prompt", {required: true})}/>
                <button type="submit">Create</button>
            </form>
            {workout && <WorkoutContainer workout={workout}/>}
        </div>
    )
}