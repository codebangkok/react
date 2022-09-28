import { setupServer } from "msw/node"
import { rest } from "msw"

const server = setupServer(
    rest.get("http://codebangkok.com:5000/africa/animals", (req, res, ctx) => {

        const text = req.url.searchParams.get("search")

        if (text && text === "zebra") {
            return res(
                ctx.json(
                    [
                        {
                            id: "zebra",
                            name: "Zebra",
                            headline: "This is Zebra",
                            image: "zebra",
                            gallery: ["zebra-1", "zebra-2"]
                        },
                    ]
                )
            )
        }

        return res(
            ctx.json(
                [
                    {
                        id: "lion",
                        name: "Lion",
                        headline: "This is Lion",
                        image: "lion",
                        gallery: ["lion-1", "lion-2"]
                    },
                    {
                        id: "zebra",
                        name: "Zebra",
                        headline: "This is Zebra",
                        image: "zebra",
                        gallery: ["zebra-1", "zebra-2"]
                    },
                ]
            )
        )
    })
)

export default server