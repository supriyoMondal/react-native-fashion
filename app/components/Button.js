import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const Button = ({ label, variant = 'default', onPress = () => { } }) => {

    const backgroundColor = variant == 'primary' ? '#00bfff' : 'rgba(12,13,52,.1)'
    const color = variant == 'primary' ? 'white' : '#0c0d34'

    return (
        <RectButton
            onPress={() => onPress()}
            style={[styles.container, {
                backgroundColor,
                borderRadius: 25
            }]}>
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 15
    }
})
