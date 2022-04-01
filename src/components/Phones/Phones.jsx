import { useSearchParams } from 'react-router-dom'
import PhoneForm from './PhoneForm/PhoneForm'
import PhonesList from './PhonesList/PhonesList'
import SearchPhoneForm from './SearchPhoneForm/SearchPhoneForm'

const {
  createContext, useState, useEffect, useContext,
} = require('react')

const PhonesContext = createContext()

const Phones = () => {
  const [phones, setPhones] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const filterQuery = searchParams.get('filter')

    const query = filterQuery ?? ''

    fetch(`http://localhost:3000/api/v1/phones/?filter=${query}`)
      .then((response) => response.json())
      .then(setPhones)
  }, [])

  const addPhone = (newPhone) => {
    setPhones((prev) => [...prev, newPhone])
  }

  const updatePhones = (newPhonesList) => setPhones(newPhonesList)

  const deletePhone = (id) => {
    fetch(`http://localhost:3000/api/v1/phones/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          setPhones((prev) => prev.filter((phone) => phone.id !== id))
        }
      })
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PhonesContext.Provider value={{
      phones, addPhone, deletePhone, updatePhones,
    }}
    >
      <PhoneForm />

      <hr className="mb-4" />
      <SearchPhoneForm />
      <PhonesList />
    </PhonesContext.Provider>
  )
}

export default Phones

const usePhonesContext = () => useContext(PhonesContext)

export {
  PhonesContext,
  usePhonesContext,
}
