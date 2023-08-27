
import { createChatRoom } from "../services/chat.js";

//Figure out how to put chatcover later + move to firebase storage
const TEMP_CHATDISPLAYLIST = [
    { id: '1', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '2', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
];


export const resolvers = {
    Query: {
        chatList: () => {
            return TEMP_CHATDISPLAYLIST;
        }
    },
    Mutation: {
        createNewUser: async (_, params) => {
            const { email } = params;
            console.log('Create New User function called');
            return await createNewUser(email);
        },
        createChatRoom: async (_, params) => {
            const { userId, id } = params;
            console.log("Creating chat room");
            return await createChatRoom(userId, id);
        }
    }
};