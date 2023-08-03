import { TextInput } from "react-native-paper"
import { UniversalAppContainer } from "../../../components"
import { StyleSheet } from "react-native"


export const Chat = () => {
    <UniversalAppContainer>
        <TextInput style={styles.textInput} mode="outlined" />
    </UniversalAppContainer>
}

const styles = StyleSheet.create({
    textInput: {
        marginTop: 'auto'
    }
});