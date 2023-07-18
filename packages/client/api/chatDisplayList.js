import { gql } from "@apollo/client";


export const chatDisplayListQuery = gql`
    query TEMP_CHATDISPLAYLIST {
        TEMP_CHATDISPLAYLIST {
            id
            chatTitle
            chatDescription
            date
        }
    }
`