import { ChatScreenHeader } from '../components';
import { SearchBar } from 'react-native-elements';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import tempProfilePic from '../assets/favicon.png';



export function ContactScreen() {

    //Move to back-end when convenient
    const TEMP_DATA = [
        { id: '1', contactUsername: "Cathy", profilePic: tempProfilePic },
        { id: '2', contactUsername: "Bobby", profilePic: tempProfilePic },
        { id: '3', contactUsername: "Fadia", profilePic: tempProfilePic },
        { id: '4', contactUsername: "Ethan", profilePic: tempProfilePic },
        { id: '5', contactUsername: "David", profilePic: tempProfilePic },
        { id: '6', contactUsername: "Alice", profilePic: tempProfilePic }
    ];

    const renderContact = ({ item }) => (
        // <TouchableOpacity>
        <View style={styles.renderContactStyle}>
            <Image source={item.profilePic} style={styles.profilePic} />
            <Text style={styles.contactUsernameStyle}>{item.contactUsername}</Text>
        </View>
        // </TouchableOpacity>
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
                placeholder="Search Contacts"
                onChangeText={onChangeSearch}
                value={searchQuery}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInput}
            />
            <FlatList
                horizontal={false}
                data={TEMP_DATA.sort((a, b) => a.contactUsername.localeCompare(b.contactUsername))}
                renderItem={renderContact}
                keyExtractor={(item) => item.id}
                style={{ backgroundColor: 'blue' }}
            />
        </View>
    );
}
//.sort((a, b) => a.contactUsername.localeCompare(b.contactUsername))

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    renderContactStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    profilePic: {
        width: 30,
        height: 30,
        margin: 10
    },
    contactUsernameStyle: {
        fontSize: 20,
        marginRight: "auto"
    }
});