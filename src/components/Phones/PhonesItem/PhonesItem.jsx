import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { usePhonesContext } from '../Phones'

// const { Link } = require('react-router-dom')

const phonesItemVariants = {
  start: {
    scaleY: 0,
    opacity: 0,
    zIndex: -1,
  },
  end: {
    scaleY: 1,
    opacity: 1,
    zIndex: 1,
  },
}

const PhonesItem = ({ name, phone, id }) => {
  const deleteTrashold = 100
  const { deletePhone } = usePhonesContext()
  const followX = useMotionValue(0)

  const xInput = [-deleteTrashold, 0, deleteTrashold]
  const background = useTransform(followX, xInput, [
    'linear-gradient(180deg, #FF0000 0%, #FF0000 100%)',
    'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(180deg, #FF0000 0%, #FF0000 100%)',
  ])

  let isDrag = false

  const navigate = useNavigate()

  const dragStartHandler = () => {
    console.log('dragStartHandler')
    isDrag = true
  }

  const dragEndHandler = () => {
    console.log('dragEndHandler')

    if (Math.abs(followX.get()) > deleteTrashold) {
      deletePhone(id)
    }

    setTimeout(() => {
      isDrag = false
    })
  }

  const clickHandler = () => {
    console.log('clickHandler', { isDrag })
    if (!isDrag) navigate(`/phones/${id}`)
  }

  return (
    <motion.div
      className="list-group-item list-group-item-action d-flex justify-content-between"
      drag="x"
      style={{ x: followX, background, width: '300px' }}
      dragConstraints={{
        top: 0, bottom: 0, left: 0, right: 0,
      }}
      onDragStart={dragStartHandler}
      onClick={clickHandler}
      variants={phonesItemVariants}
      onDragEnd={dragEndHandler}
      role="button"
      exit={{
        scaleY: 0,
        opacity: 0,
        zIndex: -1,
      }}
    >
      {/* <Link className="list-group-item list-group-item-action" to={`/phones/${id}`}> */}
      <span className="pe-4">
        {name}
      </span>
      <span>

        {phone}
      </span>
      {/* </Link> */}

    </motion.div>

  )
}

export default PhonesItem
