import React, { Component } from 'react'
import './App.css';
import Result from './components/Result.js'
import Keypad from './components/Keypad.js'

class App extends Component {
    constructor(){
        super();

        this.state = {
            answer: ""
        }
    }

    onClick = button => {

      if(button === "="){
          console.log('clig')
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
              answer: this.state.answer + button
          })
      }
    }


    calculate = () => {
      var checkResult = ''
      if(this.state.answer.includes('--')){
          checkResult = this.state.answer.replace('--','+')
      }

      else {
          checkResult = this.state.answer
      }

      try {
          this.setState({
              // eslint-disable-next-line
              answer: (eval(checkResult) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              answer: "error"
          })

      }
    }


    reset = () => {
        this.setState({
            answer: ""
        })
    }

    backspace = () => {
        this.setState({
            answer: this.state.answer.slice(0, -1)
        })
    }


    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <Result answer={this.state.answer}/>
                    <Keypad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App
