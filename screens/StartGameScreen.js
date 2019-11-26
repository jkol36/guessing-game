import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from '../components/card';
import colors from '../constants/colors';
import Input from '../components/input'
import NumberContainer from '../components/numberContainer'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));

    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99.', [{ text: "Okay", style: 'destructive', onPress: resetInputHandler }])

        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text> You selected</Text>
                <NumberContainer> 
                    {selectedNumber}
                </NumberContainer>
                <Button title='START GAME' onPress={() => props.OnStartGame(selectedNumber)}/>
                
            </Card>
        )
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.text}>
                <Text> Start a New Game!</Text>
                <Card style={styles.inputContainer} heading='hello world'>
                    <Text style={styles.title}> Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" color={colors.accent} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={colors.primary} onPress={confirmInputHandler} />
                        </View>

                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    )

}

const styles = StyleSheet.create({
    text: {
        flex: 1, //takes all the space below the header
        padding: 10,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    button: {
        height: 100,
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center',

    },
    summaryContainer: {
        marginTop:20,
        alignItems:'center',

    }



})

export default StartGameScreen;


