import React from 'react'


export function Input(props) {
    return (
        <div className="form-group" style={{marginTop: "10px"}}>
            <input className="form-control" {...props} />
        </div>
    )
}

export function SubmitBtn(props) {
    return (
        <button {...props} className="btn submitBtn" style={{backgroundColor: "#226d56", color: "white", marginTop: "10px", marginBottom: "10px"}}>Search</button>
    )
}