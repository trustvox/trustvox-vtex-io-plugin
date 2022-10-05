import React, { useEffect } from 'react'
import { injectColtScript } from "./services/ScriptHandler";

import styles from './styles.css';

const Colt = () => {
  useEffect(() => {
    injectColtScript();
  }, [])

  return (
    <div id="_trustvox_colt" className={styles.coltTrustvoxContainer} />
  )
}

export default Colt
