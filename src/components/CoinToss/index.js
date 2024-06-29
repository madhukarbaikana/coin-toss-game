// Write your code here
import {Component} from 'react'
import './index.css'

const headsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, isHead: true}

  resultImage = () => {
    const {isHead} = this.state

    const resultImage = isHead ? (
      <img src={headsImgUrl} className="toss-coin-image" />
    ) : (
      <img src={tailsImgUrl} className="toss-coin-image" />
    )

    return resultImage
  }

  tossCoin = () => {
    const num=Math.floor(Math.random()*2)
    if(num===0){

      this.setState(prevState=>({isHead:true,
        heads: prevState.heads+1
      }))
    }
    else{
      this.setState(prevState=>({isHead:false,
        tails:prevState.tails+1
      }))
    }
  }

  render() {
    const {heads, tails, isHead} = this.state

    return (
      <div className="coin-toss-game-bg-container">
        <div className="game-card">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="game-tag">Heads (or) Tails</p>
          {this.resultImage()}
          <button className="coin-toss-button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total : {heads + tails}</p>
            <p className="result">Heads : {heads}</p>
            <p className="result">Tails : {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
