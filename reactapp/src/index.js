import React from "react"
import { createRoot } from "react-dom/client"

const App = () => {
    return <div>Hello World</div>
}

const el = document.getElementById("root")
const root = createRoot(el)
root.render(<App/>)