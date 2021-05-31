import React, { useState } from "react";
import { Text, View } from "react-native";
import { CalculatorButton } from "../components/CalculatorButton";
import { styles } from "../theme/appTheme";

export const CalculatorScreen = () => {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [previousNumber] = useState("0");

    const clear = () => {
        setCurrentNumber("0");
    };

    const typeNumber = (character: string) => {
        // Allow dot just once
        if (character === "." && currentNumber.includes(".")) return;

        // Validate cases when number starts with 0
        if (currentNumber.startsWith("0") || currentNumber.startsWith("-0")) {
            // Add decimal point
            if (character === ".") {
                setCurrentNumber(currentNumber + character);
            }

            // Check if character is another zero and current number has a decimal point
            else if (character === "0" && currentNumber.includes(".")) {
                setCurrentNumber(currentNumber + character);
            }

            // Check if character is different from zero and current number has no decimal point
            else if (character !== "0" && !currentNumber.includes(".")) {
                setCurrentNumber(currentNumber.slice(0, -1) + character);
            }

            // Avoid multiple zeros
            else if (character === "0" && !currentNumber.includes(".")) {
                setCurrentNumber(currentNumber);
            } else {
                setCurrentNumber(currentNumber + character);
            }
        } else {
            setCurrentNumber(currentNumber + character);
        }
    };

    const handlePositiveNegative = () => {
        if (currentNumber.includes("-")) {
            setCurrentNumber(currentNumber.replace("-", ""));
        } else {
            setCurrentNumber("-" + currentNumber);
        }
    };

    const deleteButton = () => {
        let sign = "";
        let auxNumber = currentNumber;

        if (currentNumber.includes("-")) {
            (sign = "-"), (auxNumber = currentNumber.substr(1));
        }

        if (auxNumber.length > 1) {
            setCurrentNumber(sign + auxNumber.slice(0, -1));
        } else {
            setCurrentNumber("0");
        }
    };

    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.smallResult}>{previousNumber}</Text>
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
                {currentNumber}
            </Text>

            <View style={styles.row}>
                <CalculatorButton label="C" color="lightGray" action={clear} />
                <CalculatorButton label="+/-" color="lightGray" action={handlePositiveNegative} />
                <CalculatorButton label="del" color="lightGray" action={deleteButton} />
                <CalculatorButton label="÷" color="orange" action={typeNumber} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="7" color="darkGray" action={typeNumber} />
                <CalculatorButton label="8" color="darkGray" action={typeNumber} />
                <CalculatorButton label="9" color="darkGray" action={typeNumber} />
                <CalculatorButton label="x" color="orange" action={typeNumber} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="4" color="darkGray" action={typeNumber} />
                <CalculatorButton label="5" color="darkGray" action={typeNumber} />
                <CalculatorButton label="6" color="darkGray" action={typeNumber} />
                <CalculatorButton label="-" color="orange" action={typeNumber} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="1" color="darkGray" action={typeNumber} />
                <CalculatorButton label="2" color="darkGray" action={typeNumber} />
                <CalculatorButton label="3" color="darkGray" action={typeNumber} />
                <CalculatorButton label="+" color="orange" action={typeNumber} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="0" color="darkGray" wide action={typeNumber} />
                <CalculatorButton label="." color="darkGray" action={typeNumber} />
                <CalculatorButton label="=" color="orange" action={typeNumber} />
            </View>
        </View>
    );
};
