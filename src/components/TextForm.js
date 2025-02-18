import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText] = useState('enter data...'); //This is our default value which is stored in text and we can change this with the help of setText  
    const handleTextAreaClick = () => {
        console.log("handleTextAreaClick clicked")
        if(text === 'enter data...'){
            setText("");
        }
    }
    const handleUpClick = () => {
        console.log("Uppercase clicked")
        setText(text.toUpperCase()); //setText is used to update the value of text
        if(text.length===0){
            props.showAlert('Textbox is empty','warning')
        }
        else{
            props.showAlert('Converted to UpperCase','success')
        }
    }
    const handleOnChange = (event) => {
        console.log("Onchange triggered")
        setText(event.target.value); //It allow us to write data in text field
    }
    const handleLowClick = (event) => {
        console.log("Lowercase clicked")
        setText(text.toLowerCase());
        props.showAlert('Converted to LowerCase','success')
    }
    const handleClearText = (event) => {
        console.log("ClearText clicked")
        setText("");
        props.showAlert('Text has been cleared','success')
    }
    
    const handleCopyText = (event) => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text has been copied','success')
    }
    const handleExtraSpaces = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces has been removed','success')
    }
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="7" value={text} onChange={handleOnChange} onClick={handleTextAreaClick} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
        <button className='btn btn-primary my-3 mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleClearText}>Clear Text</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleCopyText}>Copy Text</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
  </div>
  <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
       <h1>Your Text Summary</h1>
       <p>{text.split(' ').length}words and {text.length} character</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:'Enter something in textbox above to preview it here'}</p>
  </div>
  </>
  )
}
