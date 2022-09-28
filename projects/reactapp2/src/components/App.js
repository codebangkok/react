import React, { useState } from "react";
import SearchBar from "./SearchBar"
import AnimalList from "./AnimalList"
import api from "../api"

const App = () => {

    const [animals, setAnimals] = useState([])

    const searchAnimals = async (text) => {
        // console.log(text)
        const res = await api.get(`africa/animals`, {
            params: { search: text }
        })
        // console.table(res.data)
        setAnimals(res.data)
    }

    return (
        <div className="ui container">
            <SearchBar onSubmit={searchAnimals}/>
            <AnimalList animals={animals}/>
        </div>
    )
}

export default App