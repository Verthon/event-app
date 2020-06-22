import React from 'react'
import { motion } from 'framer-motion'
import { pageTransitions } from '../../animations/pageTransitions'

const AnimatePresence = ({ children }) => {
  return (
    <motion.div initial="exit" animate="enter">
      <motion.div variants={pageTransitions}>{children}</motion.div>
    </motion.div>
  )
}

export default AnimatePresence
