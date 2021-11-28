import { gql } from "apollo-server-express";

export const typeUsuario = gql`
    enum userRole {
        ADMINISTRADOR
        LIDER
        ESTUDIANTE
    }

    enum userStatus {
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    type User {
        _id: Int!
        name: String!
        mail: String!
        password: String!
        role: [userRole]!
        status: [userStatus]!
    }
    
    type Query {
        getUsers: [User]
        getUser(_id: Int): User
    }

    type Mutation {
        createUser(
            _id: Int!
            name: String!
            mail: String!
            password: String!
            role: userRole!
        ): User

        updateUser(
            _id: Int!
            name: String!
            mail: String!
            password: String!
            status: [userStatus]!
        ): User

        deleteUser(_id: Int!) : User

    }
`;