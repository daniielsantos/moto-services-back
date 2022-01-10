import * as express from "express"
import middlewares from "./middlewares"
import bikeRouter from "../routes/bike.router"
import orderRouter from "../routes/order.router"
import partnerRouter from "../routes/partner.router"
import tables from "../infra/databases/tables"

const app = express()
middlewares(app)
app.use("/bike", bikeRouter)
app.use("/order", orderRouter)
app.use("/partner", partnerRouter)

app.listen(3333, async () => {
    await tables.createTables()
    console.log("application running on port 3333")
})
