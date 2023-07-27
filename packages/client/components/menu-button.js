import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { IconButton, Menu } from 'react-native-paper';

export function MenuButton() {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
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
    );
}

const styles = StyleSheet.create({
    icons: {
        width: 22,
        height: 22,
        // marginLeft: 'auto'
    },
})