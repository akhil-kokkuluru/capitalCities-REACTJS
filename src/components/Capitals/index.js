import {Component} from 'react'
import './index.css'
import CapitalsList from '../CapitalsList'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {countryVal: countryAndCapitalsList[0].country}

  countryChanging = vals => {
    this.setState({countryVal: vals})
  }

  onchanging = event => {
    console.log(event.target.value)
    const [gettingItem] = countryAndCapitalsList.filter(
      item => item.id === event.target.value,
    )
    const {country} = gettingItem
    console.log(country)
    this.setState({countryVal: country})
  }

  render() {
    const {countryVal} = this.state
    const [valueforSelect] = countryAndCapitalsList.filter(
      items => items.country === countryVal,
    )
    const {selectC} = valueforSelect
    return (
      <div className="totalBg">
        <div className="contentBg">
          <h1 className="para">Countries and Capitals</h1>
          <div className="selectContainer">
            <select
              className="optionEL4"
              value={selectC}
              onChange={this.onchanging}
            >
              {countryAndCapitalsList.map(item => (
                <CapitalsList
                  countryAndCapitalsList={item}
                  key={item.id}
                  countryChanging={this.countryChanging}
                />
              ))}
            </select>
            <p className="paras">is capital of which country?</p>
          </div>
          <h1>{countryVal}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
