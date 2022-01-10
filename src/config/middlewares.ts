import bodyParser from "../middlewares/body-parser";
import cors from "../middlewares/cors";

export default (app) => {
    app.use(cors)
    app.use(bodyParser)
}
