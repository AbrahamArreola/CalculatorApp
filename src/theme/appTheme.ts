import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#000",
    },
    calculatorContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "flex-end",
    },
    result: {
        color: "#FFF",
        fontSize: 60,
        textAlign: "right",
        marginBottom: 10,
    },
    smallResult: {
        fontSize: 30,
        color: "rgba(255, 255, 255, 0.5)",
        textAlign: "right",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: "#333333",
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10,
    },
    ButtonText: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: "#FFF",
        fontWeight: "bold",
    },
});
