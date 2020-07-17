import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen');

export const SLIDE_HEIGHT = .61 * height;

const Slide = ({ label, right }) => {
    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: (right ? 1 : -1) * (width - 100) / 2 },
        { rotate: right ? '-90deg' : '90deg' }
    ]
    return (
        <View style={styles.container}>
            <View style={{ ...styles.labelContainer, transform }}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    )
}

export default Slide

const styles = StyleSheet.create({
    container: {
        width
    },
    label: {
        fontSize: 75,
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    labelContainer: {
        justifyContent: 'center',
        height: 100
    }
})
