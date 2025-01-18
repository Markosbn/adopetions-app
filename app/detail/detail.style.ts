import {StyleSheet} from "react-native";
import Colors from "@/constants/Colors";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        color: Colors.dark.text,
    },
    title: {
        marginLeft: 20,
        color: Colors.dark.text,
    },
    icon: {
        backgroundColor: Colors.dark.iconBackground,
        color: Colors.dark.text,
    },
    header: {
        backgroundColor: Colors.dark.background,
        color: Colors.dark.text,
    },
    user: {
        flexDirection: 'row',
        flex: 0.2,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    page: {
        flex: 0.7,
        backgroundColor: Colors.dark.background,
        color: Colors.dark.text,
    },
    userData: {
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: "center"
    },
    pageButtons: {
        marginTop: 20,
        gap: 5,
        flex: 0.6,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    button: {
        color: Colors.dark.text,
    }
});