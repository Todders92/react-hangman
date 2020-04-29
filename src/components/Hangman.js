import React from 'react';
import { randomWord } from './Words.js';
// import step0 from './images'

class Hangman extends React.Component {

  static defaultProps = {
    maxWrong: 6,
    // images: [step0, step1, step2, step3, step4, step5, step6],
    failWords: ["nice to meet you!", "hey?!", "please don't hurt me!", "why?", "ouch!", "please let me die", "x_x"]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      // winState: false,
      // loseState: false,
      guessed: new Set([" "]),
      answer: randomWord()
    }
  }
  
  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guess: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1) // ? true : not true
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }
  // guessedWord() {
  //   return this.state.answer.split("").map(letter => {
  //     if (this.state.guessed.has(letter) && letter != " "){
  //       return letter;
  //     } else if 
  //       (letter === " ") {
  //         return letter;
  //     } else {
  //       return "_ ";
  //     }
     
     
      // if(letter === " ") {
      //   return letter;
      // }
      // else{
      //   return this.state.guessed.has(letter) ? letter : " _ "};
      // }
  //   });
  // }
  // "hello world"
  // ['h','e',' ','w']
  // // 'e' 
  // // ignore spaces 
  // ['h', '_', ' ','_'] 


//  answer.replace(" ", "");


  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
      class='btn btn-lg btn-danger m-2'
      key={letter}
      value={letter}
      onClick={this.handleGuess}
      disabled={this.state.guessed.has(letter)}
      >
      {letter}
      </button>
    )); 
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      winState: false,
      loseState: false,
      answer: randomWord()
    });
  }
  
  render() {
    const gameOver = this.state.mistake >= 6;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();
    const remaining = this.props.maxWrong - this.props.mistake;

    if (isWinner) {
      gameStat = "You win!"
    }

    if (gameOver) {
      gameStat = "You Lose!!"
    }
    
    return (
      <div className="Hangman container">
        <h1 className='text-center'>Hangman</h1>
        <div className="float-right">Guesses remaining: {remaining}
      </div>
      <div className="text-center">
        {/* <img src={this.props.images[this.state.mistake]} alt=""/> */}
        <p>{this.props.failWords[this.state.mistake]}</p>
      </div>
      <div className="text-center">
        <p>Guess the animal or My Chemical Romance Song:</p>
        <p>
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p>{gameStat}</p>
        <button className='btn btn-danger' onClick={this.resetButton}>Reset</button>
      </div>
    </div>
    )



  }


}

export default Hangman;