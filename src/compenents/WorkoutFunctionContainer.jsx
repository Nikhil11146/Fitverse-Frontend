import {useWorkout} from "../context/WorkoutContext.jsx";

export default function WorkoutFunctionContainer({id}) {
    const { deleteWorkout } = useWorkout();

    async function deleteHandler() {
        await deleteWorkout(id);
    }

    return (
            <div className="workout-function-container">
                <button onClick={deleteHandler}>Delete</button>
                <button>Edit</button>
            </div>
        )
}