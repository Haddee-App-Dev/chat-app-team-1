import firebase from 'firebase-admin';

export const createNewUserCustom = async (id, email, username) => {
    try {
        const doc = firebase.firestore().collection('users').doc(id);
        doc.set({
            email: email,
            username: username
        });
        return await doc.get();
    }
    catch (err) {
        console.log(err);
    }
}

