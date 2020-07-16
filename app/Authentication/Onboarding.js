import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import Slide, { SLIDE_HEIGHT } from '../components/Slide'

const { width, height } = Dimensions.get('screen');

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <ScrollView
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                >
                    <Slide label="Relaxed" />
                    <Slide label="Playful" right />
                    <Slide label="Eccentrics" />
                    <Slide label="Funky" right />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'cyan' }} />
                <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}>

                </View>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: 'cyan',
        borderBottomEndRadius: 75
    },
    footer: {
        flexGrow: 1
    }
})
