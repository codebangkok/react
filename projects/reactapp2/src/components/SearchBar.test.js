import React from "react";
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event"

test("type and get correct text on submit", async () => {

    const onSubmit = (text) => {
        expect(text).toBe("lion")
        console.log(text)
    }

    render(<SearchBar onSubmit={onSubmit}/>)

    await userEvent.keyboard("lion{enter}")

    // const textbox = screen.getByRole("textbox")
    // fireEvent.change(textbox, {
    //     target: {
    //         value: "lion"
    //     }
    // })

    // const form = screen.getByRole("search")
    // fireEvent.submit(form)
})