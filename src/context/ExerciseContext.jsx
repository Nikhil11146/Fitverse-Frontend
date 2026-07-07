import {createContext, useContext, useState } from "react";
import api from "../../api/axios.js";

export const ExerciseContext = createContext(null);

export default function ExerciseProvider({ children }) {
    const [exercises, setExercises] = useState(null);

    async function fetchExercises(query) {
        const { data: res } = await api.get("/exercise", { params : query });
        setExercises(res.data);
    }

    async function fetchExercise(id) {
        const { data: res } = await api.get(`/exercise/${id}`);
        return res.data;
    }

    return (
        <ExerciseContext.Provider value={{ fetchExercises, exercises, fetchExercise }}>
            {children}
        </ExerciseContext.Provider>
    )
}

export const useExercise = () => useContext(ExerciseContext);