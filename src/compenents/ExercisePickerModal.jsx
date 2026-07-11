import { useState } from "react";

export default function ExercisePickerModal({ open, onClose, onSelect }) {
    const [exerciseId, setExerciseId] = useState("");

    if (!open) return null;

    return (
        <div className="exercises-picker-modal-overlay" onClick={onClose}>
            <div className="exercises-picker-modal" onClick={(e) => e.stopPropagation()}>

                <h2>Add Exercise</h2>

                <input value={exerciseId} onChange={(e) => setExerciseId(e.target.value)} placeholder="Exercise ID"/>

                <button type="button" onClick={() => {
                    onSelect(exerciseId);
                    setExerciseId("");
                }}>
                    Add
                </button>

                <button type="button" onClick={() => {
                    setExerciseId("");
                    onClose();
                }}>
                    Cancel
                </button>

            </div>
        </div>
    );
}