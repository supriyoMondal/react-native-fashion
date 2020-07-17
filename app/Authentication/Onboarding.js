import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Animated, } from 'react-native'
import Slide, { SLIDE_HEIGHT } from '../components/Slide'
import SubSlides from '../components/SubSlides';
import { multiply } from 'react-native-reanimated';


const { width, height } = Dimensions.get('screen');

const BORDER_RADIUS = 75;
const slides = [
    { label: "Relaxed", color: '#bfeaf5', subLabel: 'Lorem Ipsum has', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle" },
    { label: "Playful", color: '#beecc4', subLabel: 'Lorem Ipsum has unknown printer', description: "Lorem Ipsum has been the industry's standard dummy text ever " },
    { label: "Eccentrics", color: '#ffe4d9', subLabel: 'distracted by the readable content', description: "Lorem Ipsum has been the industry's standard dummy text ever nknown printer took a galley of ty " },
    { label: "Funky", color: '#fcc0f9', subLabel: "Content here, content here', making", description: "Lorem Ipsum has been the industry's standard dummy " },
]

const Onboarding = () => {

    const animatedValue = new Animated.Value(0);
    const backgroundColor = animatedValue.interpolate({
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })
    console.log(Animated.multiply(animatedValue, -1))
    const event = Animated.event([
        {
            nativeEvent: {
                contentOffset: {
                    x: animatedValue
                }
            }
        }
    ])

    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.slider, backgroundColor: backgroundColor }}>
                <Animated.ScrollView
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    onScroll={event}
                >
                    {slides.map((slide, i) =>
                        (<Slide key={i} label={slide.label} right={i % 2 == 0 ? false : true} />)
                    )}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
                <Animated.View style={{
                    ...styles.footerContent,
                    transform: [
                        { translateX: Animated.multiply(animatedValue, -1) }
                    ]
                }} >
                    {slides.map((slide, i) =>
                        (<SubSlides key={i} last={i == slides.length - 1}
                            title={slide.subLabel}
                            subTitle={slide.description}
                        />)
                    )}
                </Animated.View>
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
        borderBottomEndRadius: BORDER_RADIUS
    },
    footer: {
        flexGrow: 1
    },
    footerContent: {
        flex: 1, backgroundColor: 'white', borderTopLeftRadius: BORDER_RADIUS, flexDirection: 'row',
        width: width * slides.length
    }
})
