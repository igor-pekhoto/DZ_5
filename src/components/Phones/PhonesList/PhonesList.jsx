import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { PhonesContext } from '../Phones'
import PhonesItem from '../PhonesItem/PhonesItem'

const phonesListVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
}

const PhonesList = () => {
  const { phones } = useContext(PhonesContext)

  return (
    <div className="d-flex justify-content-center">
      {
          phones.length ? (
            <motion.div variants={phonesListVariants} initial="start" animate="end" className="list-group">
              <AnimatePresence>
                {phones.map((phone) => (
                  <PhonesItem key={phone.id} {...phone} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : null
      }

    </div>
  )
}

export default PhonesList
