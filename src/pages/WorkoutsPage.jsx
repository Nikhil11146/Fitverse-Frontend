import {useEffect, useState} from "react";
import {useExercise} from "../context/ExerciseContext.jsx";
import {useWorkout} from "../context/WorkoutContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useUser} from "../context/UserContext.jsx";
import {useAuth} from "../context/AuthContext.jsx";
import WorkoutContainer from "../compenents/WorkoutContainer.jsx";
import WorkoutFunctionContainer from "../compenents/WorkoutFunctionContainer.jsx";

export default function Workouts() {
    const [filters, setFilters] = useState({search: ""});
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(null);
    const [workouts, setWorkouts] = useState([]);
    const { fetchWorkouts } = useWorkout();
    const [users, setUsers] = useState([]);
    const { fetchExercise } = useExercise()
    const { fetchUserDetails } = useUser();
    const { user } = useAuth();
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

            const workoutsData = await fetchWorkouts(query);

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
        <div className="workouts-page page">
            <div className="workouts-page-header">
                <h1>Workouts</h1>
                <div className="workout-functions-container">
                    <Link to="/workouts/create" className="custom-btn-1">Create Workout</Link>
                    <Link to="/workouts/create-ai" className="custom-btn-1">Create Workout Using AI</Link>
                    <Link to="/workouts/my-workouts" className="custom-btn-1">My Workouts</Link>
                </div>
            </div>
            <div className="workout-data-container">
                <div className="filter-navbar">
                    <input type="text" placeholder="Search exercises..." className="filter-input custom-input-1" name="search" value={filters.search} onChange={handleFilterChange}/>
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
                                <div className="workout-container"  key={workout._id}>
                                    <Link to={`/workouts/${workout._id}`}>
                                        <WorkoutContainer workout={workout} owner={users[index]}/>
                                    </Link>
                                    {
                                        workout.ownerId === user._id && (
                                            <WorkoutFunctionContainer id={workout._id}/>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
}