import { gql } from "@apollo/client";

export const createNewUserCustomMutation = gql`
    mutation createNewUserCustom($id: String!, $email: String!, $username: String!) {
        createNewUserCustom(id: $id, email: $email, username: $username) {
            id
            email
            username
        }
    }
`