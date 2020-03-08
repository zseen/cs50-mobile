import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import vibrate from './utils/vibrate.js'

const WORKTIME_SECONDS = 25 * 60;
const BREAKTIME_SECONDS = 5 * 60;

const TimerTypeEnum = { "work": 1, "break": 2 }
Object.freeze(TimerTypeEnum)

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remainingSecondsCount: WORKTIME_SECONDS,
            timerType: TimerTypeEnum["work"],
            isPaused: true,
        };
    };

    componentWillUpdate(nextProps, nextState) {
        if (nextState.remainingSecondsCount === 0) {
            vibrate();
        }

        if (this.state.remainingSecondsCount === 0) {
            this.setState(prevState => ({
                remainingSecondsCount: prevState.timerType === TimerTypeEnum["break"] ? BREAKTIME_SECONDS : WORKTIME_SECONDS,
                timerType: prevState.timerType === TimerTypeEnum["work"] ? TimerTypeEnum["break"] : TimerTypeEnum["work"]
            }));
            clearInterval(this.interval);
            this.start();
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
        if (this.state.timerType == TimerTypeEnum["work"]) {
            this.setState({ remainingSecondsCount: WORKTIME_SECONDS });
        } else {
            this.setState({ remainingSecondsCount: BREAKTIME_SECONDS });
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
            this.setState({ remainingSecondsCount: this.state.remainingSecondsCount - 1 });
        }, 1000);
    };

    formatSecondsAsMinutesAndSeconds = seconds => {
        const secondsToRender = seconds % 60;
        const minutesToRender = Math.trunc(seconds / 60);
        return (
            this.addPaddingZeroWhenNeeded(minutesToRender) + ":" + this.addPaddingZeroWhenNeeded(secondsToRender)
        );
    };

    addPaddingZeroWhenNeeded(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.largeFont}>Pomodoro timer!</Text>
                <Text style={styles.mediumFont}>{this.state.timerType == TimerTypeEnum["work"] ? "Work Timer" : "Break Timer"}</Text>
                <Text style={styles.mediumFont}>{this.formatSecondsAsMinutesAndSeconds(this.state.remainingSecondsCount)}</Text>
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
