import React, { useState } from 'react'
import Card from '../../shared/Card'

function Calculator() {
    const arr = ["AC", "C", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="]
    const [value, setValue] = useState("")
    const [justCalculated, setJustCalculated] = useState(false)

    // Handle typing in input box
    const handleInput = (e) => {
        setValue(e.target.value)
    }

    // Handle button clicks
    const handleButtonClick = (btnValue) => {

        console.log(btnValue)
        if (btnValue === "ac") {
            setValue("")
            setJustCalculated(false);
        } else if (btnValue === "=") {
            try {
                setJustCalculated(true)
                setValue(eval(value).toString())
            } catch {
                setValue("Error")
            }
        }
        else {
            if (setJustCalculated) {
                const operators = ['-', '+', '/', '*', '.', '%']
                if (!operators.includes(btnValue)) {
                    setValue(btnValue)
                }
                else {
                    setValue((prev) => prev + btnValue)
                }
                setJustCalculated(false);
            }
            else {
                setValue((prev) => prev + btnValue)
            }
        }
    }


    return (
        <div className="w-lg justify-self-center-safe mt-5">
            <Card>
                <form onSubmit={(e) => e.preventDefault()}>

                    <input
                        type="text"
                        value={value}
                        onChange={handleInput}
                        placeholder="calculate..."
                        className="w-full mb-5 rounded-lg border px-4 py-3 text-slate-700 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <div className="grid grid-cols-4 gap-5">

                        {arr.map((data, idx) => (
                            <button
                                className='px-4 py-2 rounded-md font-medium transition duration-200 bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300'
                                key={idx}
                                variant="secondary"
                                // type="submit"
                                onClick={() => handleButtonClick(data)}
                            >
                                {data}
                            </button>
                        ))}

                    </div>

                </form>
            </Card>
        </div>
    )
}

export default Calculator