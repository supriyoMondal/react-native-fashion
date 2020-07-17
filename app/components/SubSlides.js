import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'

const SubSlides = ({ title, subTitle, last, onPress = () => { } }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>{title}</Text>
            <Text style={styles.description}>{subTitle}</Text>
            <Button label={last ? "Let's get started" : "Next"}
                variant={last ? 'primary' : 'default'}
                onPress={onPress}
            />
        </View>
    )
}

export default SubSlides

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 44
    },
    description: {
        fontSize: 13,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 20
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    }
})
