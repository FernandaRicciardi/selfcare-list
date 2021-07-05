import React from "react"
import bin from "../assets/bin.png"
import done from "../assets/done.png"
import undone from "../assets/undone.png"

function DoneImg(props) {
    if(props.done) {
        return (<img src={done} alt="done" title="done!"></img>)
    } else {
        return (<img src={undone} alt="undone" title="done?"></img>)
    }
}

function List(props) {

    return(
        <div className="selfCare-list">
            <ul> 
                <div>
                    {props.items.map(item =>
                        <li 
                            className={item.done ? "selfCare-item done" : "selfCare-item"}
                            key={item.id}>
                            {item.text}

                            <button 
                                className="done_button"
                                onClick={() => {props.onDone(item)}}>
                                    <DoneImg done={item.done} />    
                            </button>
                           
                            <button
                                className="bin_button"
                                onClick={() => {props.onItemDeleted(item)}}>
                                <img
                                    src={bin}
                                    alt="delete item"
                                    title="delete item">
                                </img>
                            </button>

                        </li>)
                    }
                </div>
            </ul>
        </div>
      
    
    )
}

export default List