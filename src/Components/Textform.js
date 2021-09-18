import React,{useState} from 'react';

export default function Textform(props) {
    const changeUppercase = ()=> {
        setText(text.toUpperCase());
    }
    const changeLowercase = ()=> {
        setText(text.toLowerCase());
    }
    const handleOnchange = (event)=> {
        setText(event.target.value);
    }
    const uppercase = ()=> {
        var array1 = text.split(' ');
        var newarray1 = [];
          
        for(var x = 0; x < array1.length; x++){
            newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
        }
        setText(newarray1.join(' '));
    }
    const [text,setText] = useState('');


    return (
        <>
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={changeUppercase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={changeLowercase}>Convert to LowerCase</button>   
            <button className="btn btn-primary mx-2" onClick={uppercase}>Convert first letter of each word to UpperCase</button>   
        </div>
        <div className="container my-2">
            <h2>Your Text Summary</h2>
            <p>
                {text.split(' ').length} words and {text.length} characters
            </p>
            <p>
                It takes {0.008*text.split(' ').length} minutes to read your text for an average person
            </p>
            <h3>Preview</h3>
            <p>
                {text}
            </p>
        </div>
        </>
    )
}
