import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
//import {vibrate} from './utils'

//const WORKTIME = 25 * 60;
const WORKTIME = 1 * 60;
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
  }
  
  
  componentWillUpdate(nextState) {
    if (nextState.count === 0) {
      vibrate();
      this.setState(prevState => ({
        count: prevState.isWorkTimer ? BREAKTIME : WORKTIME,
        isWorkTimer: prevState.isBreakTimer
      }));
    }
  }

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
      this.setState({ isPaused: false });
      this.start()
    } else {
      this.setState({ isPaused: true });
    }
  };

  reset = () => {
    if (this.state.isWorkTimer) {
      this.setState({ count: WORKTIME });
    } else {
      this.setState({ count: BREAKTIME });
    }
    this.setState({ isPaused: true });
  };



  countDown2 = () => {
	setInterval(this.setState(prevState => 
  ({count: prevState.count - 1})), 1000)
  console.log(this.state.count)
  return};
  

  start = () => {
    this.setState({
      isPaused: false,
    })
   
	this.countDown()
	
  }
  
  countDown = () => {
	  this.interval = setInterval(() => {
			this.setState({count: this.state.count - 1});
		}, 1000);  
  }
  
  componentDidMount() {
	this.toggleStopStart()
	
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text>Pomodoro timer!</Text>
        <Text>{this.state.isWorkTimer ? "Work Timer" : "Break Timer"}</Text>
        <Text>{this.parseTime(this.state.count)}</Text>

        <Button
          title={this.state.isPaused ? "Start" : "Stop"}
          onPress={() => this.toggleStopStart()}
        />
        <Button title="Reset" onPress={this.reset} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    //justifyContent: 'center',
  }
});
