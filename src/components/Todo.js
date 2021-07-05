import React, { useState, useEffect } from "react"
import Item from "./Item"
import TodoForm from "./TodoForm"
import List from "./List"

const SAVED_ITEMS = "savedItems"

function Todo() {

    const [items, setItems] = useState([])
    
    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItems) setItems(savedItems)
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {
        let newItem = new Item(text)
        setItems([...items, newItem])
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)
    }

    function onDone(item) {
        
        let updatedItems = items.map(it => {

            if(it.id === item.id) {
                it.done = !it.done
            }

            return it
        })

        setItems(updatedItems)
    }

    return(
       <div>
            <TodoForm 
                onAddItem={onAddItem}
            />

            <List
                onDone={onDone}
                items={items}
                onItemDeleted={onItemDeleted}
            />
       </div>
    )
}

export default Todo