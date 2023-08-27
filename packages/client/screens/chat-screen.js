import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import * as React from 'react';
import tempChatCover from '../assets/favicon.png';
import { useQuery } from '@apollo/client';
import { chatDisplayListQuery } from '../api/chatDisplayList.js';
import { ActivityIndicator } from 'react-native-paper';
import { ChatScreenHeader, UniversalAppContainer, MenuButton } from '../components';


export function ChatScreen() {

    const renderChat = ({ item }) => (
        <View style={styles.renderChatStyle}>
            {/* Change it back to "source={item.chatCover}" */}
            <Image source={tempChatCover} style={styles.chatCoverStyle} />
            <View style={styles.chatTextContainer}>
                <Text style={styles.chatTitleStyle}>{item.chatTitle}</Text>
                <Text style={styles.chatDescrptionStyle}>{item.chatDescription}</Text>
            </View>
            <View style={styles.chatDateContainer}>
                <Text style={styles.chatDateStyle}>{item.date}</Text>
            </View>
        </View>
    );

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => {
        setSearchQuery(query);
    }

    const { loading, data, error } = useQuery(chatDisplayListQuery);
    console.log(error);

    if (loading) {
        return <ActivityIndicator />
    }
    return (
        //Universal App Container removed here because it leaves a white space at the top
        <View style={styles.root}>
            <ChatScreenHeader
                headerTitle="Chats"
                button={<MenuButton />}
            />
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
                data={data?.chatList}
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
        alignItems: 'center'
    },
    chatCoverStyle: {
        width: 60,
        height: 60,
    },
    chatTextContainer: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginLeft: 5
        //backgroundColor: 'yellow',
    },
    chatTitleStyle: {
        fontSize: 18,
        fontWeight: '500'
    },
    chatDescrptionStyle: {
        fontSize: 14,
        fontWeight: '200'
    },
    chatDateContainer: {
        marginLeft: 'auto',
        marginBottom: 'auto'
        //backgroundColor: 'yellow'
    },
    chatDateStyle: {
        alignSelf: 'flex-end',
        fontSize: 12,
        fontWeight: '200',
    },
    icons: {
        width: 21,
        height: 21,
        // marginLeft: 'auto'
    },
})