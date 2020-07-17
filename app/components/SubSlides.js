import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SubSlides = ({ title, subTitle, last }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>{title}</Text>
            <Text style={styles.description}>{subTitle}</Text>
            <Button title={last ? "Let's get started" : '          Next          '}
                color={last ? '#f3f3f4' : 'grey'}
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
