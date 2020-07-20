import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import style from "./underlining_button.module.css";

function UnderliningButton(props) {
  const { callback, value, isSelected } = props;

  const backgroundAnim = useAnimation();
  const textAnim = useAnimation();
  const textProps = {
    start: {
      letterSpacing: 5 + "px",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    end: {
      letterSpacing: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const underlineAnim = useAnimation();
  const underlineProps = {
    start: {
      width: 100 + "px",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    end: {
      width: 15 + "px",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const handleHoverStart = () => {
    underlineAnim.start(underlineProps["start"]);
    textAnim.start(textProps.start);
  };

  const handleHoverEnd = () => {
    if (!isSelected) {
      underlineAnim.start(underlineProps["end"]);
      textAnim.start(textProps["end"]);
    }
  };

  useEffect(() => {
    if (props.isSelected) {
      handleHoverStart();
    } else {
      setTimeout(handleHoverEnd, 700);
    }
  }, [props.isSelected]);

  return (
    <motion.div
    //   whileHover={{
    //     scale: 1.1,
    //     transition: { duration: 0.2 },
    //   }}
      whileTap={{
        scale: 1.1,
        backgroundColor: "rgba(0, 0, 0, 0.322)",
        borderRadius: 20 + "px",
        padding: "0px 10px 0px 30px",
      }}
      onTap={(e) => callback(value)}
      onHoverStart={(e) => handleHoverStart()}
      onHoverEnd={(e) => handleHoverEnd()}
      style={{ backgroundColor: "transparent" }}
    >
      <div className={style.buttonBackground}>
        <motion.div animate={textAnim} className={style.buttonText}>
          <p>{props.children}</p>
        </motion.div>
        <motion.div
          animate={underlineAnim}
          className={style.underline}
        ></motion.div>
      </div>
    </motion.div>
  );
}
export default UnderliningButton;
