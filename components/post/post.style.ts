import {StyleSheet} from "react-native";
import Colors from "@/constants/Colors";

export const Styles = StyleSheet.create({
    container : {
        flex: 1,
        height: 400,
        backgroundColor: Colors.dark.background,
        color: Colors.dark.text
    },
    title: {
        color: Colors.dark.text,
    },
    image: {
        height: 340,
        backgroundColor: Colors.dark.background,
        color: Colors.dark.text
    },
});