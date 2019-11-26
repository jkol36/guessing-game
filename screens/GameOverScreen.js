import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The game is over!
            </Text>
            <Text>Number of rounds: {props.numberOfRounds}</Text>
            <Text> Number lost: {props.roundsNumber}</Text>
            <Text> user number: {props.userNumber}</Text>
            <Button title="restart game" onPress={props.onRestart} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;