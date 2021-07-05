import React from 'react'
import Header from './Header'
import Todo from './Todo'
import Footer from "./Footer"
import '../styles.css'

function App() {
    return(
        <div>
            <div className="content">

                <Header />

                <Todo />
                
            </div>

            <Footer />

        </div>
    )
}

export default App