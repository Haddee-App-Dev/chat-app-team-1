
import { Button } from "react-native-paper";
import { View, Text, StyleSheet } from 'react-native';
import { userAtom } from '../../../atoms';
import { createChatRoomMutation } from '../api';
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/client";


export const UserCard = (props) => {
    const { user: selectedUser } = props;
    //Create userAtom thing later
    const [user] = useRecoilState(userAtom);
    const [createChatRoom, { error }] = useMutation(createChatRoomMutation);
    const navigation = useNavigation();

    console.log(error)

    const handleCreateChatRoom = () => {
        createChatRoom({
            variables: {
                id: user.id,
                userId: selectedUser.id
            },
            onCompleted: () => {
                navigation.navigate('chat', {
                    chatRoomId: data.createChatRoom.id
                })
            }
        })
    }

    return (
        <View styles={styles.card}>
            <Text>{user.email}</Text>
            <Button style={styles.button} mod="contained" onPress={handleCreateChatRoom}>Message</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ededed',
        padding: 20,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        marginLeft: 'auto'
    }
});