export const modalWrVariants = {
  start: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
    },
  },
  end: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

export const modalInnerVariants = {
  start: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
  end: {
    y: 200,
    opacity: 0,
  },
}
