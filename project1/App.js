import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import vibrate from './utils/vibrate.js'

const WORKTIME = 25 * 60;
const BREAKTIME = 5 * 60;


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: WORKTIME,
            isWorkTimer: true,
            isPaused: true,
            isBreakTimer: false
        };
    };

    componentWillUpdate(nextProps, nextState) {
        if (nextState.count == 0) {
            vibrate();
        }

        if (this.state.count == 0) {
            this.setState(prevState => ({
                count: prevState.isWorkTimer ? BREAKTIME : WORKTIME,
                isWorkTimer: prevState.isBreakTimer,
                isBreakTimer: prevState.isWorkTimer,
            }));
            clearInterval(this.interval);
            this.start();
        }
    };

    parseTime = seconds => {
        const secondsToRender = seconds % 60;
        const minutesToRender = Math.trunc(seconds / 60);
        return (
            addPaddingZero(minutesToRender) + ":" + addPaddingZero(secondsToRender)
        );

        function addPaddingZero(number) {
            if (number < 10) {
                return "0" + number;
            } else {
                return number;
            }
        }
    };

    toggleStopStart = () => {
        if (this.state.isPaused) {
            this.start()
        } else {
            this.setState({ isPaused: true })
            clearInterval(this.interval)
        };
    };

    reset = () => {
        if (this.state.isWorkTimer) {
            this.setState({ count: WORKTIME });
        } else {
            this.setState({ count: BREAKTIME });
        }
        this.setState({ isPaused: true });
        clearInterval(this.interval);
    };

    start = () => {
        this.setState({
            isPaused: false
        });

        this.countDown();
    };

    countDown = () => {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count - 1 });
        }, 1000);
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.largeFont}>Pomodoro timer!</Text>
                <Text style={styles.mediumFont}>{this.state.isWorkTimer ? "Work Timer" : "Break Timer"}</Text>
                <Text style={styles.mediumFont}>{this.parseTime(this.state.count)}</Text>
                <View style={styles.buttonInline}>
                    <Button
                        title={this.state.isPaused ? "Start" : "Stop"}
                        onPress={() => this.toggleStopStart()}
                    />
                    <Button title="Reset" onPress={this.reset} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCF3CF",
        justifyContent: "center",
        alignItems: "center",
    },
    largeFont: {
        fontSize: 40,
        marginBottom: 30,
    },
    mediumFont: {
        fontSize: 25,
        marginBottom: 20,
    },
    buttonInline: {
        flexDirection: 'row',
    }
});
