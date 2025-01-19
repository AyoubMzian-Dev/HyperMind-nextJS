'use client'


import { Checkbox } from './ui/checkbox'
import React, {useState} from 'react'



interface stepType {
    stepId: number
    stepTitle: string
    stepState: boolean
  }




export default function TaskCardAlert(step : stepType) {
    const [isChecked, setIsChecked] = useState(step.stepState)

    let fakeValue = isChecked
    function handleChange(){
        setIsChecked(!isChecked)
        fakeValue = !fakeValue

    }
    return (
        <>
            <Checkbox id="terms" defaultChecked={fakeValue} onChange={()=>handleChange()} className="w-6 h-6" />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {step.stepTitle || "Accept terms and conditions"}
            </label>
        </>
    )
}
