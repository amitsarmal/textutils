import React, { useState } from 'react';

export default function Textform(props) {
    const changeUppercase = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to uppercase', 'Success');
    }
    const changeLowercase = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to lowercase', 'Success');
    }
    const clearText = () => {
        setText('');
        props.showAlert('Text Cleared', 'Success');
    }
    const copyText = () => {
        let copy = document.getElementById('TextBox')
        // copy.select();  //it selects the text like ctrl+A
        navigator.clipboard.writeText(copy.value);
        props.showAlert('Text Copied', 'Success');
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        newText = newText.join(' ')
        setText(newText.trim());
        props.showAlert('Extra space removed', 'Success');
    }
    const uppercase = () => {
        var array1 = text.split(/\s+/);
        var newarray1 = [];

        for (var x = 0; x < array1.length; x++) {
            newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1).toLowerCase());
        }
        setText(newarray1.join(' '));
        props.showAlert('Converted every first letter to uppercase', 'Success');
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <div className="container my-1">
            <div>
                <div className="mb-3 text-center">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`} ><h2>{props.heading}</h2></label>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={handleOnchange} id="TextBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={changeUppercase}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={changeLowercase}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={removeExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={uppercase}>Make Text Better</button>
            </div>
            <div className={`container my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.length > 0 ? text.trim().split(/\s+/).length : 0} words and {text.split(" ").join("").length} characters
                </p>
                <p>
                    It takes {text.length > 0 ? 0.008 * text.trim().split(' ').length : 0} minutes to read your text for an average person
                </p>
                <h3>Preview</h3>
                <p>
                    {text.length > 0 ? text : "Enter some text to preview"}
                </p>
            </div>
        </div>
    )
}
