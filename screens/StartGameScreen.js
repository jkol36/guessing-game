import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/card';
import colors from '../constants/colors';
import Input from '../components/input'

const StartGameScreen = props => {
    return (
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
                    maxLength={2} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" color={colors.accent} onPress={() => { }} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" color={colors.primary} onPress={() => { }} />
                    </View>
                   
                </View>
            </Card>
        </View>
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
        width:300,
        maxWidth:'80%',
        alignItems: 'center',

    },
    button: {
        height:100,
        width:100
    },
    input: {
        width:50,
        textAlign: 'center',

    }



})

export default StartGameScreen;


