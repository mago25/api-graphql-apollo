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
        getProjects: [Project]
        getProjectByLeader(leader_id: Int): [Project]
    }

    type Mutation {
        createProject(
            _id: ID!
            name: String!
            generalObjs: String!
            specificObjs: String!
            budget: Float!
            startDate: Date!
            finishDate: Date!
            leader_id: Int!
        ): Project

        updateProject(
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
        ): Project

        deleteProject(_id: ID!) : Project

    }
`;