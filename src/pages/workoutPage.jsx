import {Link, useParams} from "react-router-dom";
import {useWorkout} from "../context/WorkoutContext.jsx";
import {useEffect, useState} from "react";
import {useExercise} from "../context/ExerciseContext.jsx";
import WorkoutContainer from "../compenents/WorkoutContainer.jsx";
import {useUser} from "../context/UserContext.jsx";
import WorkoutFunctionContainer from "../compenents/WorkoutFunctionContainer.jsx";

export default function Workout() {
    const { id } = useParams();
    const {fetchWorkout} = useWorkout();
    const [loading, setLoading] = useState(true);
    const [workout, setWorkout] = useState(null);
    const [owner, setOwner] = useState();
    const [exercises, setExercises] = useState([]);
    const [apiError, setApiError] = useState(false);
    const {fetchExercise} = useExercise();
    const {fetchUserDetails} = useUser();

    async function fetchData() {
        setLoading(true);
        try {
            const data = await fetchWorkout(id);
            setWorkout(data);
            const exerciseData = await Promise.all(
                data.exercises.map(exercise => fetchExercise(exercise.exercise))
            )
            setExercises(exerciseData);
            const user = await fetchUserDetails(data.ownerId);
            setOwner(user);
        } catch(e) {
            setApiError(true);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [id])

    return (
        <div className="workout-page page">
            {
                loading ? (
                    <p>Loading... </p>
                ) : apiError ? (
                    <h1>No Workout Found</h1>
                ) : (
                <div key={workout._id} className="workout-container">
                    <Link exercises={exercises} to={`/workouts/${workout._id}`}>
                        <WorkoutContainer workout={workout} owner={owner}/>
                    </Link>
                    {
                        workout.ownerId === owner._id && (
                            <WorkoutFunctionContainer id={workout._id}/>
                        )
                    }
                </div>
                )
            }
        </div>
    )
}