import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/numberContainer';
import Card from '../components/card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }

}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    const nextGuessHandler = direction => {
        if(direction === 'lower' && currentGuess < props.userChoice || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie', 'You know that this is wrong...', [{text:'sorry!', style:'cancel'}])
            return;
        }
        if(direction === 'lower') {
            /* generateRandomBetween() */
            currentHigh.current = currentGuess
        }


    }
    //initial boundaries that I'm using for the random number
    const currentLow = userRef(1);
    const currentHigh = userRef(100)

    return (
        <View style={styles.screen}>
            <Text>Opponents Guess:</Text>
            <NumberContainer> {currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='lower' onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title='higher' onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});

export default GameScreen;