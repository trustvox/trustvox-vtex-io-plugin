import React, { useEffect } from 'react'
import { injectTrustVoxScripts } from "./services/ScriptHandler";

import styles from './styles.css';

const Certificate = () => {
  useEffect(() => {
    injectTrustVoxScripts();
  }, [])

  return (
    <div className={styles.certificateTrustvoxContainer} data-trustvox-certificate-fixed="data-trustvox-certificate-fixed" />
  )
}

export default Certificate
