import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

export const ImageCarousel = ({ images }) => {
    return (
        <Carousel
            width={width}
            height={300}
            autoPlay
            data={images}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item }} style={styles.image} />
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
});