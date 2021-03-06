import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';


const AppPickerItem = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text} >{label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})

export default AppPickerItem;