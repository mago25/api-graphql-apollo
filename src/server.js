import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import { dbConnection } from "./database.js";
import { gqlServer } from "./graphql/gqlServer.js";


//Variables
const app = express();
dotEnv.config();

//Configuración
app.set('port', process.env.PORT);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Manejo de errores
app.use((error, req, res, next) => {
    console.log("Error: ", error);
    res.redirect('/');
});

//Arranque del servidor
app.listen(process.env.PORT,async () => {
    //Conexion base de datos
    dbConnection();
    await gqlServer.start();

    gqlServer.applyMiddleware({ app });

    console.log("Servidor funcionando en el puerto:", process.env.PORT);

});