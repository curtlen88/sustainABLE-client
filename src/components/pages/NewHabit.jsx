import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import HabitsForm from '../HabitsForm'

export default function NewHabit() {
    return (
        <div>
            New Habit
            {/* create a new habit  */}
            {/* show form to create new habit from habitsform.jsx*/}

            <HabitsForm />
        </div>
    )
}