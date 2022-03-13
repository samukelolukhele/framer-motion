import React, { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: '-100vw',
  }
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000)
  }, [setShowModal])
  
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit='exit'
    >
      <motion.h2 exit={{ y: -1000, opacity: 0 }}>
        Thank you for your order :)
      </motion.h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants} className="">
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
