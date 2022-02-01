import express from "express";
import jwtAthenticationMiddleware from "./middlewares/jwt.authentication.middleware";
import errorHandler from "./middlewares/error.handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

//Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configurações das Rotas

app.use(statusRoute);
app.use(authorizationRoute);

app.use(jwtAthenticationMiddleware);
app.use(usersRoute);


//Configuração dos Handlers de Erro
app.use(errorHandler);

//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
})