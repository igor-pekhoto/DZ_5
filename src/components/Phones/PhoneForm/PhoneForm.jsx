import Form from '../Form/Form'
import { usePhonesContext } from '../Phones'

const PhoneForm = () => {
  const { addPhone } = usePhonesContext()

  const submitHandler = async (e) => {
    e.preventDefault()

    console.log()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    const response = await fetch('http://localhost:3000/api/v1/phones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 201) {
      const phoneFromServer = await response.json()
      addPhone(phoneFromServer)
      e.target.reset()
    } else {
      alert('Wrong data')
    }
  }

  return (
    <Form
      onSubmit={submitHandler}
    />
  )
}

export default PhoneForm
