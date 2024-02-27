import React from 'react'

const InputTag = ({ spanText, inputType, required, inputName, changeHandle, inputValue }) => {
    return (
        <>
            <div className="form-control">
                <div className="label">
                    <span className="label-text">{spanText}</span>
                </div>
                <input type={inputType} className="input input-bordered w-full  rounded-md bg-gray-100" required={required} name={inputName} onChange={changeHandle} autoComplete='off' value={inputValue} />
            </div>
        </>
    )
}

export default InputTag
