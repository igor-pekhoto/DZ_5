import { useState } from 'react'

const usePhonesDetailModal = () => {
  const [viewModal, setViewModal] = useState(false)

  const openModal = () => {
    setViewModal(true)
  }

  const closeModal = () => {
    setViewModal(false)
  }

  return {
    viewModal,
    openModal,
    closeModal,
  }
}

export default usePhonesDetailModal
