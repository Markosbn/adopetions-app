import {View} from "react-native";
import {ImageCarousel} from "@/components/carousel/image-carousel";
import {Styles} from "@/app/detail/detail.style";
import {Appbar, Avatar, Button, Snackbar, Text} from 'react-native-paper';
import Colors from "@/constants/Colors";
import { useRouter, useLocalSearchParams} from "expo-router";
import React from "react";
import {getAnimalById} from "@/components/post/simple-post.model";

export default function Detail({}) {
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const router = useRouter();
    const params = useLocalSearchParams();
    const animal = getAnimalById(params[0]);

    const images = animal.imagesPaths;
    return (
        <View style={Styles.container}>
            <Appbar.Header style={Styles.header}>
                <Appbar.BackAction color={Colors.dark.text} onPress={() => {router.back()}} />
                <Appbar.Content title={animal.name} color={Colors.dark.text} />
            </Appbar.Header>
            <ImageCarousel images={images}></ImageCarousel>
            <View style={Styles.user}>
                <Avatar.Image source={{uri: animal.userImagePath}} size={60} style={Styles.icon}></Avatar.Image>
                <View style={Styles.userData}>
                    <Text style={Styles.title} variant={"headlineSmall"}>{animal.user}</Text>
                    <Text style={Styles.title} variant={"labelSmall"}>{animal.userType}</Text>
                </View>

            </View>
            <View style={Styles.page}>
                <Text style={Styles.title} variant={"titleLarge"}>Sobre {animal.name}</Text>
                <Text style={Styles.title} variant={"bodySmall"}>{animal.about}</Text>
                <View style={Styles.pageButtons}>
                    <Button textColor={Colors.dark.text} buttonColor={Colors.dark.iconBackground} icon="check" mode="contained" onPress={() => onToggleSnackBar()}>Adotar</Button>
                    <Button textColor={Colors.dark.text} buttonColor={Colors.dark.iconBackground} icon="chat" mode="contained" onPress={() => onToggleSnackBar()}>Conversar com responsável</Button>
                    <Button textColor={Colors.dark.text} buttonColor={Colors.dark.iconBackground} icon="star" mode="contained" onPress={() => onToggleSnackBar()}>Adicionar aos favoritos</Button>
                </View>

            </View>

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'OK'
                }}>
                Under development
            </Snackbar>
        </View>
    )
}