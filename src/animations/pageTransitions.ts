const easing = [0.175, 0.85, 0.42, 0.96]

export const pageTransitions = {
  initial: { opacity: 0, x: 0 },
  exit: { opacity: 0, x: 50, transition: { duration: 0.25, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    }
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    }
  }
}

export const eventsListTransition = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export const eventItemTransition = {
  initial: { opacity: 0, y: 250 },
  exit: { opacity: 0, y: 250, transition: { duration: 0.25, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easing,
      delay: .25
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easing,
      delay: .25
    }
  }
}