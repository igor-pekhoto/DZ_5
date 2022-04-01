import {
  createContext, useContext, useMemo,
} from 'react'
import withLoader from '../../hocs/withLoader'
import usePhonesDetail from './hooks/usePhonesDetail'
import usePhonesDetailModal from './hooks/usePhonesDetailModal'
import PhonesDetailCard from './PhonesDetailCard/PhonesDetailCard'
import PhonesDetailModal from './PhonesDetailModal/PhonesDetailModal'

const PhonesDetailContext = createContext()

const PhonesDetailCardWithLoader = withLoader(PhonesDetailCard)

const PhonesDetail = () => {
  const { viewModal, openModal, closeModal } = usePhonesDetailModal()
  const { phone, loading, submitHandler } = usePhonesDetail(closeModal)

  const sharedValues = useMemo(() => ({
    viewModal, openModal, closeModal, phone, submitHandler,
  }), [phone, viewModal])

  return (
    <PhonesDetailContext.Provider value={sharedValues}>
      <div className="d-flex justify-content-center">
        <PhonesDetailCardWithLoader loading={loading} a={10} />
        <PhonesDetailModal />
      </div>
    </PhonesDetailContext.Provider>

  )
}

export default PhonesDetail

export const usePhonesDetailContext = () => useContext(PhonesDetailContext)
