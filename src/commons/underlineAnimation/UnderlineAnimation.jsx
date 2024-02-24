import React from 'react';
import { motion } from 'framer-motion';

const UnderlineAnimation = ({color = "#3498db", height = 2 , onHoverMauseState}) => {

  let variantState = onHoverMauseState ? "visible" : "hidden";


  const variants = {
    visible: { width: '100%' },
    hidden: { width: 0 },
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={variantState}

      variants={variants}
      transition={{ duration: 0.5 }}
      style={{
        height,
        background: color, // Color del subrayado
      }}
    />
  );
};

export default UnderlineAnimation;
