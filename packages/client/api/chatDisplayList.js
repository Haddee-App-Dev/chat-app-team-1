import { gql } from "@apollo/client";


export const chatDisplayListQuery = gql`
    query ChatList {
        ChatList {
            id
            chatTitle
            chatDescription
            date
        }
    }
`