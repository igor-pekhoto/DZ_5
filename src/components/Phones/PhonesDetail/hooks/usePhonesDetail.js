import {
  useLayoutEffect, useRef, useState,
} from 'react'
import { useParams } from 'react-router-dom'

const usePhonesDetail = (closeModal) => {
  const { phonesId } = useParams()

  const [loading, setLoading] = useState(false)

  const controller = useRef(new AbortController())

  const [phone, setPhone] = useState({})

  useLayoutEffect(() => {
    setLoading(true)

    fetch(`http://localhost:3000/api/v1/phones/${phonesId}`, { signal: controller.current.signal })
      .then((response) => response.json())
      .then((dataFromServer) => setPhone(dataFromServer))
      .finally(() => setLoading(false))

    return () => {
      controller.current.abort()
    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    console.log()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    const response = await fetch(`http://localhost:3000/api/v1/phones/${phone.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 200) {
      const updatedPhoneFromServer = await response.json()
      setPhone(updatedPhoneFromServer)
      closeModal()
      e.target.reset()
    } else {
      alert('Wrong data')
    }
  }

  return {
    phone,
    loading,
    submitHandler,
  }
}

export default usePhonesDetail
