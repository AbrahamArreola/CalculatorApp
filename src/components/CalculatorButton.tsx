import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/appTheme";

interface ICalculatorBtnProps {
    label: string;
    color?: "darkGray" | "lightGray" | "orange";
    wide?: boolean;
    action: (character: string) => void;
}

const colors = {
    darkGray: "#343434",
    lightGray: "#a5a5a5",
    orange: "#f89f09",
};

export const CalculatorButton = ({
    label,
    color = "darkGray",
    wide = false,
    action,
}: ICalculatorBtnProps) => {
    return (
        <TouchableOpacity onPress={() => action(label)}>
            <View
                style={{
                    ...styles.button,
                    backgroundColor: colors[color],
                    width: wide ? 180 : 80,
                }}
            >
                <Text
                    style={{
                        ...styles.ButtonText,
                        color: color === "lightGray" ? "#000" : "#fff",
                    }}
                >
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
