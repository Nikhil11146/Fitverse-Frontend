import {createContext, useContext, useState} from "react";
import api from "../../api/axios.js";

const WorkoutContext = createContext(null);

export default function WorkoutProvider({ children }) {

    async function fetchWorkouts(query) {
        const { data: res } = await api.get("/workout/all", { params : query });
        return res.data;
    }

    async function fetchMyWorkouts() {
        const { data: res } = await api.get("/workout");
        return res.data;
    }

    async function fetchWorkout(id) {
        const { data: res } = await api.get(`/workout/${id}`);
        return res.data;
    }

    async function createWorkoutAI(data) {
        const { data: res } = await api.post(`/workout/ai`, data);
        return res.data;
    }

    return (
        <WorkoutContext.Provider value={{ fetchWorkouts, fetchWorkout, createWorkoutAI, fetchMyWorkouts }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export const useWorkout = () => useContext(WorkoutContext);