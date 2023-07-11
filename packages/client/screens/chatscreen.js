import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ChatScreenHeader } from '../components/chatscreenmenu.js';
import * as React from 'react';
import tempChatCover from '../assets/favicon.png';


// Here until firebase + graphql is set up to steal data from there
const TEMP_DATA = [
    { id: 1, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 2, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 3, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 4, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 5, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 6, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 7, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 8, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 9, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 10, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
    { id: 11, chatCover: tempChatCover, chatTitle: "Gamer Gang", chatDescription: "Cool kids only" },
];

export function ChatScreen() {

    const renderChat = ({ item }) => (
        <View style={styles.renderChatStyle}>
            <Image source={item.chatCover} style={styles.chatCoverStyle} />
            <View style={styles.chatTextContainer}>
                <Text style={styles.chatTitleStyle}>{item.chatTitle}</Text>
                <Text style={styles.chatDescrptionStyle}>{item.chatDescription}</Text>
            </View>
        </View>
    );

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => {
        setSearchQuery(query);
    }

    return (
        <View style={styles.root}>
            <ChatScreenHeader />
            <SearchBar
                lightTheme={true}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInput}
            />
            <FlatList
                horizontal={false}
                data={TEMP_DATA}
                renderItem={renderChat}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 20
    },
    searchBarContainer: {
        backgroundColor: 'white',
        borderRadius: 5,
    },
    searchBarInput: {
        backgroundColor: 'white'
    },
    renderChatStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'yellow',
    },
    chatCoverStyle: {
        width: 60,
        height: 60,
    },
    chatTextContainer: {
        flexDirection: 'column',
        marginRight: 'auto',
        marginLeft: 5,
        borderBottomWidth: 1
    },
    chatTitleStyle: {
        fontSize: 18,
        fontWeight: '500'
    },
    chatDescrptionStyle: {
        fontSize: 14,
        fontWeight: '200'
    }
})