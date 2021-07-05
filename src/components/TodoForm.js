import React, { useState } from "react"
import add from "../assets/add.png"

function TodoForm(props) {

    const [text, setText] = useState("")

    function handleChange(event) {
        let txt = event.target.value
        setText(txt)
    }

    function addItem(event) {
        event.preventDefault();
        if(text) {
            props.onAddItem(text)
            setText("")
        }
    }

    return(
        <form>
            <div className="txt_input">

                <input
                    onChange={handleChange}
                    type="text"
                    value={text}
                    placeholder="What would you love to do?"
                    autoFocus>
                </input>
           
                <button
                    className="add_button"
                    onClick={addItem}>
                    <img
                        src={add}
                        alt="add item"
                        title="add item">
                    </img>
                </button>
                
            </div>
        </form>
    )
}

export default TodoForm