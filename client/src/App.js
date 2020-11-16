import React from "react";
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import joyBanner  from './media/nature.svg'

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <img src={joyBanner} alt=""/>
            <Form />
            <Posts />
        </div>
    )
}

export default App;