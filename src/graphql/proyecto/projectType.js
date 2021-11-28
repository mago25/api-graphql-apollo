import { gql } from "apollo-server-express";

export const typeProyecto = gql`
    scalar Date

    enum projectStatus {
        ACTIVO
        INACTIVO
    }

    enum projectPhase {
        NULO
        INICIADO
        EN DESARROLLO
        TERMINADO
    }

    type Project {
        _id: ID!
        name: String!
        generalObjs: String!
        specificObjs: String!
        budget: Float!
        startDate: Date!
        finishDate: Date!
        leader_id: Int!
        status: projectStatus!
        phase: projectPhase!
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
            status: userStatus!
        ): User

        deleteUser(_id: Int!) : User

    }
`;