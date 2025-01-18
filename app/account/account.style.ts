import {StyleSheet} from "react-native";
import Colors from "@/constants/Colors";

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        color: Colors.dark.text,
        flex: 1,
    },
    header: {
        backgroundColor: Colors.dark.background,
        color: Colors.dark.text,
    },
    icon: {
        backgroundColor: Colors.dark.iconBackground,
        color: Colors.dark.text,
    },
    page: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    }
});