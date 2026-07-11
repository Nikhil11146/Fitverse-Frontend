import {useForm, useFieldArray} from "react-hook-form";
import ExercisePickerModal from "../compenents/ExercisePickerModal.jsx";
import {useState} from "react";

export default function WorkoutCreate() {
    const [showPicker, setShowPicker] = useState(false);
    const { register, control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            name: "",
            description: "",
            isPublic: true,
            exercises: []
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "exercises"
    });

    function handleExerciseSelect(exerciseId) {
        append({
            exercise: exerciseId,
            sets: 3,
            reps: 12,
            weight: 0,
            duration: 0,
            rest: 90,
            order: fields.length + 1
        });

        setShowPicker(false);
    }

    async function createWorkoutHandler(data) {
        console.log(data);
    }

    return (
        <div className="workout-create-page page">
            <h1>Create Workout</h1>
            <form onSubmit={handleSubmit(createWorkoutHandler)}>

                <input
                    type="text"
                    placeholder="Workout Name"
                    {...register("name", { required: "Name is required" })}
                />
                <p>{errors.name?.message}</p>

                <textarea placeholder="Description"
                {...register("description", {
                    required: "Description is required"
                })}
                />
                <p>{errors.description?.message}</p>

                <label>
                    <input type="checkbox" {...register("isPublic")} />
                    Public Workout
                </label>

                <h2>Exercises</h2>

                {/*exercise form*/}
                {fields.map((field, index) => (
                    <div key={field.id} className="exercise-card">
                        <div className="exercise-header">
                            <h3>Exercise #{index + 1}</h3>
                            <p>{field.exercise}</p>
                            <button type="button" onClick={() => remove(index)}>Delete</button>
                        </div>

                        <input type="hidden" {...register(`exercises.${index}.exercise`)} />
                        <input type="hidden" {...register(`exercises.${index}.order`, { valueAsNumber: true })} />

                        <div className="exercise-fields">
                            <div>
                                <label>Sets</label>
                                <input type="number" {...register(`exercises.${index}.sets`, { valueAsNumber: true, required: true, min: 1 })} />
                            </div>

                            <div>
                                <label>Reps</label>
                                <input type="number" {...register(`exercises.${index}.reps`, { valueAsNumber: true, required: true, min: 1 })} />
                            </div>

                            <div>
                                <label>Weight</label>
                                <input type="number" {...register(`exercises.${index}.weight`, { valueAsNumber: true, min: 0 })} />
                            </div>

                            <div>
                                <label>Duration</label>
                                <input type="number" {...register(`exercises.${index}.duration`, { valueAsNumber: true, min: 0 })} />
                            </div>

                            <div>
                                <label>Rest</label>
                                <input type="number" {...register(`exercises.${index}.rest`, { valueAsNumber: true, min: 0 })} />
                            </div>
                        </div>
                    </div>
                ))}
                <button type="button" onClick={() => setShowPicker(true)}>
                    Add Exercise
                </button>
                <ExercisePickerModal open={showPicker} onClose={() => setShowPicker(false)} onSelect={handleExerciseSelect} />

                <button type="submit" disabled={isSubmitting}>
                    Create Workout
                </button>

            </form>
        </div>
    )
}