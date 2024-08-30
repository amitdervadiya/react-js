import React, { useState } from 'react'

export default function Text() {
    const up = () => {

        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const onup = (event) => {
        setText(event.target.value)
    }
    const clear = () => {
        let newtext = ""
        setText(newtext)
    }
    const [text, setText] = useState('')

    return (
        <>
            <div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={onup} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="button btn btn-primary mx-2" onClick={up} >
                    uppercase
                </div>
                <div className="button btn btn-primary" onClick={clear}>
                   clear
                </div>

            </div>

            <div className="container p-0 py-2">

                <p> {text.length}  characters </p>


            </div>
        </>
    )
}
