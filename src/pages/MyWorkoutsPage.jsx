import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useWorkout} from "../context/WorkoutContext.jsx";
import {useExercise} from "../context/ExerciseContext.jsx";
import {useUser} from "../context/UserContext.jsx";
import {useAuth} from "../context/AuthContext.jsx";

export default function MyWorkouts() {
    const [filters, setFilters] = useState({search: ""});
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(null);
    const [workouts, setWorkouts] = useState([]);
    const { fetchMyWorkouts } = useWorkout();
    const [users, setUsers] = useState([]);
    const { fetchExercise } = useExercise()
    const { fetchUserDetails } = useUser();
    const navigate = useNavigate()
    const { user } = useAuth();

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

            const workoutsData = await fetchMyWorkouts(query);

            setWorkouts(workoutsData);

            const usersData = await Promise.all(
                workoutsData.map(workout => fetchUserDetails(workout.ownerId))
            );

            setUsers(usersData);
        } catch(e) {
            setApiError(e.response?.data?.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [filters])

    return (
        <div className="my-workouts-page page">
            <h1>My Workouts</h1>
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
                                <Link key={workout._id} to={`/workouts/${workout._id}`}>
                                    <div className="workout-container">
                                        <h1>{index + 1}. {workout.name}</h1>
                                        <p>{workout.description}</p>
                                        <p>{users[index] ? users[index].displayName : "Loading.."}</p>
                                        {
                                            workout.ownerId === user._id && (
                                                <div className="workout-function-container">
                                                    <button>Delete</button>
                                                    <button>Edit</button>
                                                </div>

                                            )
                                        }
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