import { useState } from 'react';
<<<<<<< HEAD
export const useInput = (initialValue) => {
    // array destructuring 
    const [value, setValue] = useState(initialValue)
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    return { value, onChange: handleChange }
=======

export const useInput = (initialValue) => {
    // array destructuring 
    const [value, setValue] = useState(initialValue)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    
    return { value, onChange: handleChange }
}
>>>>>>> c6557ac706ef656bac267aef2b2772d24af17a9d
