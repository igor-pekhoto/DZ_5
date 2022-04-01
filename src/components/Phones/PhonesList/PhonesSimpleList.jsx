import PhonesItem from '../PhonesItem/PhonesItem'
import PhonesList from './PhonesList'

const PhonesSimpleList = () => (
  <PhonesList>
    {({ phones }) => {
      console.log(phones)
      const reversePhones = [...phones].reverse()
      console.log(reversePhones)
      return reversePhones.map((phone) => <PhonesItem {...phone} key={phone.id} />)
    }}

  </PhonesList>
)

export default PhonesSimpleList
