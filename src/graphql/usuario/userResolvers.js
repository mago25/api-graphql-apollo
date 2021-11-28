import { userModel } from "../../models/userModel.js";

export const resolverUsuario = {
    Query: {
        getUsers: async(parent, args, context) => {
            let users = null;
            try {
                users = await userModel.find({});
                console.log("Listado de Usuarios");
            } catch (error) {
                console.log("Error", error)
            }
            
            return users;
        },

        getUser: async(parent, args, context) => {
            const user = await userModel.findById(args._id);
            return user;
        }
    },
    Mutation: {

        createUser: async(parent, args, context) => {
            let newUser = null;

            try {
                newUser = await userModel.create({
                    _id: args._id,
                    name: args.name,
                    mail: args.mail,
                    password: args.password,
                    role: args.role
                });
                console.log("Usuario creado con exito");

            } catch (error) {
                console.log("Error", error);
            }

            return newUser;
        },

        updateUser: async(parent, args, context) => {
            let updatedUser = null;

            try {
                updatedUser = userModel.findByIdAndUpdate(args._id,
                    {
                        name: args.name,
                        mail: args.mail,
                        password: args.password,
                        status: args.status
                    },
                    { new: true}
                );
            } catch (error) {
                console.log("Error", error);
            }

            return updatedUser;
        },

        deleteUser: async(parent, args, context) => {
            let deletedUser = null;

            if (Object.keys(args).includes('_id')) {
                deletedUser = await userModel.findOneAndDelete({_id: args._id});
            } else if (Object.keys(args).includes('mail')){
                deletedUser = await userModel.findOneAndDelete({mail: args.mail});
            }
            return deletedUser;
        }
    }
}