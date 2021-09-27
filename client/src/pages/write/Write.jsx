import { queryAllByPlaceholderText } from '@testing-library/dom'
import './write.css'

export default function Write() {
    return (
        <div className= "write">
             <img
             className="writeImg" 
             src="https://images.unsplash.com/photo-1598188306155-25e400eb5078?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
             alt="" 
         />
            <form className = "writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type= "file" id="fileInput" style={{display:"none"}}/>
                    <input type= "text" id="textInput" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Tell your story...." 
                        type="text" 
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
