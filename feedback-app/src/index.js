import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({ title }) => {
  return(
    <div>
      <h1>
        {title}
      </h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const ButtonGroup = ({ handleClicks, texts }) => {
  return(
    <div style={{ display: "flex" }}>

      {handleClicks.map((handleClick, i) => {
        return(
          <Button key={i} handleClick={handleClick} text={texts[i]} />
        )
      })}        
    </div>
  )
}

const Statistic = ({ text, value }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ texts, values }) => {
  return(
    <div>
      <table>
        <tbody>
          {texts.map((text, i) => {
            return(
              <Statistic key={i} text={text} value={values[i]} />
            )
          })}
        </tbody>
      </table>      
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counters: [0, 0, 0]
    }
    this.buttonTexts = ["hyvä", "neutraali", "huono"]
    this.handleClicks = [this.increaseByOne(0), this.increaseByOne(1), this.increaseByOne(2)]
    this.statisticsTexts = ["hyvä", "neutraali", "huono", "keskiarvo", "positiivisia"]
  }

  increaseByOne = (counterToIncrease) => {
    return () => {
      this.setState({ counters: this.state.counters.map((item, i) => {
        return(i === counterToIncrease ? ++item : item)
      })})
    }
  }



  render() {

    const calculateAverage = () => {
      const c = this.state.counters
      return(
        (c[0] - c[2]) / (c[0] + c[1] + c[2])
      )
    }
  
    const calculatePositivePercentage = () => {
      const c = this.state.counters
      return(
        c[0] / (c[0] + c[1]+ c[2]) * 100
      )
    }

    if (this.state.counters.reduce((a, b) => a + b, 0) === 0) {
      return(
        <div>
         <Title title="anna palautetta"/>         
         <ButtonGroup handleClicks={this.handleClicks} texts={this.buttonTexts}/>
         <Title title="statistiikka"/>
         {"ei yhtään palautetta annettu"}
        </div>        
      )     
    }

    return (
      <div>
        <Title title="anna palautetta"/>         
        <ButtonGroup handleClicks={this.handleClicks} texts={this.buttonTexts}/>
        <Title title="statistiikka"/>
        <Statistics texts={this.statisticsTexts} 
                   values={[...this.state.counters, calculateAverage().toFixed(1),
                    calculatePositivePercentage().toFixed(1) + " %"]}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
