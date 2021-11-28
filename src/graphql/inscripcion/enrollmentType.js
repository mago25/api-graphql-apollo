import { gql } from "apollo-server-express";

export const typeInscripcion = gql`
    scalar Date

    enum enrollmentStatus {
        NULA
        ACEPTADA
        RECHAZADA
    }

    type Enrollment {
        _id: ID!
        project_id: ID!
        user_id: Int!
        status: enrollmentStatus!
        startDate: Date!
        finishDate: Date!
    }
    
    type Query {
        getEnrollments: [Enrollment]
        getEnrollmentByUser(user_id: Int): [Enrollment]
    }

    type Mutation {
        createEnrollment(
            _id: ID!
            project_id: ID!
            user_id: Int!
            startDate: Date!
            finishDate: Date!
        ): Enrollment

        updateEnrollment(
            _id: ID!
            project_id: ID!
            user_id: Int!
            status: enrollmentStatus!
            startDate: Date!
            finishDate: Date!
        ): Enrollment

        deleteEnrollment(_id: ID!) : Enrollment

    }
`;