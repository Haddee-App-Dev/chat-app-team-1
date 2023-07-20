import { gql } from "@apollo/client";


export const chatDisplayListQuery = gql`
    query chatList {
        chatList {
            id
            chatTitle
            chatDescription
            date
        }
    }
`