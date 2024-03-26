import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
        // setText(event.target.value);
    }
    const handleLoClick = () => {
        let newLoText = text.toLowerCase();
        setText(newLoText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }
    const [text, setText] = useState('');
    // setText = ("Write your name");
    return (
        <>
        <div className="container">
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
            </div>
        </div>
        <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split((/\s+/)).filter((element)=>{return element.length!==0}).length} words and {(text.length)-(text.split(" ").length)} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>  
            <p>{text}</p>
        </div>
        </>
    )
}