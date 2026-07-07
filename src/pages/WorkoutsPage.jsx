import {useEffect, useState} from "react";
import {useExercise} from "../context/ExerciseContext.jsx";
import {useWorkout} from "../context/WorkoutContext.jsx";
import {Link, useNavigate} from "react-router-dom";

export default function Workouts() {
    const [filters, setFilters] = useState({search: ""});
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(null);
    const { fetchWorkouts, workouts } = useWorkout();
    const { fetchExercise } = useExercise();
    const navigate = useNavigate();

    function handleFilterChange(filter) {
        const { name, value } = filter.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function resetFilters() {
        setFilters({search: ""});
        setLoading(true);
    }

    async function fetchData() {
        try {
            setLoading(true);
            const query = {};


            Object.entries(filters).forEach(([key, value]) => {
                if(value !== "") query[key] = value;
            })

            await fetchWorkouts(query);
        } catch(e) {
            console.log(e);
            setApiError(e.response?.data?.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [filters])

    return (
        <div className="workouts-page">
            <h1>Workouts</h1>
            <div className="workout-functions-container">
                <Link to="/workouts/create">Create Workout</Link>
                <Link to="/workouts/create-ai">Create Workout Using AI</Link>
            </div>
            <div className="workout-data-container">
                <div className="filter-navbar">
                    <input type="text" placeholder="Search exercises..." className="filter-input" name="search" value={filters.search} onChange={handleFilterChange}/>
                </div>
                { apiError && <p>{apiError}</p>}
                {loading ? (
                    <p>Loading...</p>
                ): (workouts.length === 0)? (
                    <p>No Workouts Found</p>
                ): (
                    <div className="workouts-container">
                        {
                            workouts.map((workout, index) => (
                                <Link to={`/workouts/${workout._id}`}>
                                    <div key={workout._id} className="workout-container">
                                        <h1>{index + 1}. {workout.name}</h1>
                                        <p>{workout.description}</p>
                                        <p>{workout.ownerId}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
}