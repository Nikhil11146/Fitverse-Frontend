import {useParams} from "react-router-dom";
import {useWorkout} from "../context/WorkoutContext.jsx";
import {useEffect, useState} from "react";
import {useExercise} from "../context/ExerciseContext.jsx";
import WorkoutContainer from "../compenents/WorkoutContainer.jsx";

export default function Workout() {
    const { id } = useParams();
    const {fetchWorkout} = useWorkout();
    const [loading, setLoading] = useState(true);
    const [workout, setWorkout] = useState(null);
    const [exercises, setExercises] = useState([]);
    const {fetchExercise} = useExercise();

    async function fetchData() {
        setLoading(true);
        try {
            const data = await fetchWorkout(id);
            setWorkout(data);
            const exerciseData = await Promise.all(
                data.exercises.map(exercise => fetchExercise(exercise.exercise))
            )
            setExercises(exerciseData);
        } catch(e) {
            console.log(e);
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
                ) : (
                    <WorkoutContainer workout={workout} exercises={exercises}/>
                )
            }
        </div>
    )
}