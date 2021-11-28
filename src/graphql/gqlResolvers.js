import { resolverUsuario } from "./usuario/userResolvers.js";
import { resolverProyecto } from "./proyecto/projectResolvers.js";

export const gqlResolvers = [
    resolverUsuario,
    resolverProyecto
];
