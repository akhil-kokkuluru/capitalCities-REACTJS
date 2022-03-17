import './index.css'

const CapitalsList = props => {
  const {countryAndCapitalsList} = props
  const {capitalDisplayText, id} = countryAndCapitalsList

  return <option value={id}>{capitalDisplayText}</option>
}
export default CapitalsList
