import firebase from 'firebase-admin';

export const createChatRoom = async (userId, id) => {
    try {
        const chatRoomRef = await firebase.database().ref('/chat').push();
        const chatRoomId = chatRoomRef.key;
        chatRoomRef.set({
            users: {
                [id]: true,
                [userId]: true
            }
        });
        return {
            id: chatRoomId
        }
    }
    catch (err) {
        console.log(err);
    }
}