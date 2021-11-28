import { userModel } from "../../models/userModel.js";
import bcrypt from "bcrypt";

export const resolverUsuario = {
    Query: {
        getUsers: async(parent, args, context) => {
            const users = await userModel.find({})
                                         .then(() => console.log("Listado de Usuarios"))
                                         .catch(err => console.log("Error", err));

            return users;
        },

        getUser: async(parent, args, context) => {
            const user = await userModel.findById(args._id);

            return user;
        }
    },
    Mutation: {

        createUser: async(parent, args, context) => {
            const newUser = await userModel.create({
                _id: args._id,
                name: args.name,
                mail: args.mail,
                password: args.password,
                role: args.role
            }).then(() => console.log("Usuario creado con exito"))
              .catch(err => console.log("Error", err));

            return newUser;
        }
        
    }
}