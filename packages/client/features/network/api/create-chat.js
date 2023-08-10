import { gql } from "@apollo/client";

export const createChatRoomMutation = gql`
    mutation createChat($id: String!, $userId: String!) {
        createChatRoom(id: $id, userId: $userId) {
            id
        }
    }
`