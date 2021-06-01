import React from "react";
import { Text, View } from "react-native";
import { CalculatorButton } from "../components/CalculatorButton";
import { UseCalculator } from "../hooks/UseCalculator";
import { styles } from "../theme/appTheme";

export const CalculatorScreen: React.FunctionComponent = () => {
    const {
        previousNumber,
        currentNumber,
        clear,
        handlePositiveNegative,
        deleteButton,
        typeNumber,
        operationButton,
        calculate,
    } = UseCalculator();

    return (
        <View style={styles.calculatorContainer}>
            {previousNumber !== "0" && <Text style={styles.smallResult}>{previousNumber}</Text>}

            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
                {currentNumber}
            </Text>

            <View style={styles.row}>
                <CalculatorButton label="C" color="lightGray" action={clear} />
                <CalculatorButton label="+/-" color="lightGray" action={handlePositiveNegative} />
                <CalculatorButton label="del" color="lightGray" action={deleteButton} />
                <CalculatorButton label="÷" color="orange" action={() => operationButton("divide")} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="7" color="darkGray" action={typeNumber} />
                <CalculatorButton label="8" color="darkGray" action={typeNumber} />
                <CalculatorButton label="9" color="darkGray" action={typeNumber} />
                <CalculatorButton label="x" color="orange" action={() => operationButton("multiply")} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="4" color="darkGray" action={typeNumber} />
                <CalculatorButton label="5" color="darkGray" action={typeNumber} />
                <CalculatorButton label="6" color="darkGray" action={typeNumber} />
                <CalculatorButton label="-" color="orange" action={() => operationButton("subtract")} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="1" color="darkGray" action={typeNumber} />
                <CalculatorButton label="2" color="darkGray" action={typeNumber} />
                <CalculatorButton label="3" color="darkGray" action={typeNumber} />
                <CalculatorButton label="+" color="orange" action={() => operationButton("add")} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="0" color="darkGray" wide action={typeNumber} />
                <CalculatorButton label="." color="darkGray" action={typeNumber} />
                <CalculatorButton label="=" color="orange" action={calculate} />
            </View>
        </View>
    );
};
