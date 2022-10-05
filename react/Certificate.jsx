import React, { useEffect } from 'react'
import { injectCertificateScript } from "./services/ScriptHandler";

import styles from './styles.css';

const Certificate = () => {
  useEffect(() => {
    injectCertificateScript();
  }, [])

  return (
    <div className={styles.certificateTrustvoxContainer} data-trustvox-certificate-fixed="data-trustvox-certificate-fixed" />
  )
}

export default Certificate
