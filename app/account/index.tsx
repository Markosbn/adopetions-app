import {Appbar, Avatar, Button, Icon, Snackbar} from "react-native-paper";
import {View} from "react-native";
import {Styles} from "@/app/account/account.style";
import {router} from "expo-router";
import Colors from "@/constants/Colors";
import React from "react";


export default function Account(){
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    function handleNew() {
        console.log("Pressed");

    }
    return(
        <View style={Styles.container}>
            <Appbar.Header style={Styles.header}>
                <Appbar.BackAction color={Colors.dark.text} onPress={() => {router.back()}} />
                <Appbar.Content color={Colors.dark.text} title="Ado PET ions" />
            </Appbar.Header>
            <View style={Styles.page}>
                <Icon size={100} source={require('../../assets/images/icon.png')}></Icon>
                <Button buttonColor={Colors.dark.iconBackground} textColor={Colors.dark.text} icon="account" mode="contained" onPress={onToggleSnackBar}>
                    Meus Dados
                </Button>
                <Button buttonColor={Colors.dark.iconBackground} textColor={Colors.dark.text} icon="phone" mode="contained" onPress={onToggleSnackBar}>
                    Denuncie
                </Button>
                <Button buttonColor={Colors.dark.iconBackground} textColor={Colors.dark.text} icon="post" mode="contained" onPress={onToggleSnackBar}>
                    Meus Anúncios
                </Button>
                <Button buttonColor={Colors.dark.iconBackground} textColor={Colors.dark.text} icon="heart" mode="contained" onPress={onToggleSnackBar}>
                    Minhas adoções
                </Button>
                <Button buttonColor={Colors.dark.iconBackground} textColor={Colors.dark.text} icon="star" mode="contained" onPress={onToggleSnackBar}>
                    Meus favoritos
                </Button>
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