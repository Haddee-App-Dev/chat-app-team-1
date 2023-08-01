

//Figure out how to put chatcover later + move to firebase storage
const TEMP_CHATDISPLAYLIST = [
    { id: '1', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '2', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '3', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '4', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '5', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '6', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '7', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '8', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '9', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '10', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
    { id: '11', /*chatCover: tempChatCover,*/ chatTitle: "Gamer Gang", chatDescription: "Cool kids only", date: "1/1/2022" },
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
        }
    }
};