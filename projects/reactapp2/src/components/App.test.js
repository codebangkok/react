import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event"
import server from "./mocks/server"

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

beforeEach(() => render(<App/>))

test("search zebra return 1 card", async () => {
    await userEvent.keyboard("zebra{enter}")
    const animalCards = await screen.findAllByRole("animal")
    expect(animalCards).toHaveLength(1)
})