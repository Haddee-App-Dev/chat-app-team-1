import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, SearchBar } from 'react-native-elements';
import { ChatScreenHeader } from '../components/chatScreenMenu.js';
import * as React from 'react';
import tempChatCover from '../assets/favicon.png';
import { useQuery } from '@apollo/client';
import { chatDisplayListQuery } from '../api/chatDisplayList.js';
import { ActivityIndicator, IconButton, Menu } from 'react-native-paper';


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

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    if (loading) {
        return <ActivityIndicator />
    }
    return (
        <View style={styles.root}>
            <ChatScreenHeader headerTitle="Chats"
                button={
                    <TouchableOpacity onPress={openMenu} style={styles.menuContainer} >
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<IconButton icon="plus-circle" style={styles.icons} />}
                        >
                            <Menu.Item onPress={() => { }} title="New Chat" />
                            <Divider />
                            <Menu.Item onPress={() => { }} title="Add Contacts" />
                            <Divider />
                            <Menu.Item onPress={() => { }} title="Scan" />
                            <Divider />
                            <Menu.Item onPress={() => { }} title="Money" />
                        </Menu>
                    </TouchableOpacity>
                }
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
        marginBottom: 'auto',
        backgroundColor: 'yellow'
    },
    chatDateStyle: {
        //alignSelf: 'flex-end',
        fontSize: 12,
        fontWeight: '200',
    },
    icons: {
        width: 22,
        height: 22,
        // marginLeft: 'auto'
    },
})