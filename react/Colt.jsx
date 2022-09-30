import React, { useEffect } from 'react'
import { injectTrustVoxScripts } from "./services/ScriptHandler";

import styles from './styles.css';

const Colt = () => {
  useEffect(() => {
    injectTrustVoxScripts();
  }, [])

  return (
    <div id="_trustvox_colt" className={styles.coltTrustvoxContainer} />
  )
}

export default Colt
