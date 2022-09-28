import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import AnimalList from "./AnimalList";
import api from "../api"
import server from "./mocks/server"

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("list animals", async () => {
    const res = await api.get("africa/animals")
    render(<AnimalList animals={res.data}/>)

    const animalCards = await screen.findAllByRole("animal")
    // console.log(animalCards.length)
    expect(animalCards).toHaveLength(2)
})