import express from "express";
import { Express } from "express";
import medicoRoutes from "./routes/medicoRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";
import consultaRoutes from "./routes/consultaRoutes";

const app: Express = express();
const port: number = 3000;

app.use(express.json());

app.use("/", medicoRoutes);
app.use("/", pacienteRoutes);
app.use("/", consultaRoutes);

app.listen(port, () => {
    console.log(`A API subiu na porta ${port}`)
});