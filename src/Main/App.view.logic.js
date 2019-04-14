import App from './App.view.js'
import React, { useState } from 'react'

let AppLogic = props => {
  let [at, goTo] = useState('login')
  let [payslips, setPayslips] = useState(false)
  let [statements, setStatements] = useState(false)
  let [salaryCert, setSalaryCert] = useState(false)

  console.log('at', at)

  return (
    <App
      {...props}
      goTo={goTo}
      goToUpload={() => goTo('upload')}
      isLogin={at === 'login'}
      isDocumentsArea={at === 'documents' || at === 'complete'}
      isUpload={at === 'upload' || at === 'documents' || at === 'complete'}
      uploadPayslips={() => setPayslips(true)}
      uploadStatements={() => setStatements(true)}
      uploadSalaryCert={() => setSalaryCert(true)}
      hasPayslips={payslips}
      hasStatements={statements}
      hasSalaryCert={salaryCert}
      hasAllDocuments={payslips && statements && salaryCert && at !== 'complete'}
      isComplete={at === 'complete'}
      complete={() => goTo('complete')}
      reload={() => window.location.reload()}
    />
  )
}

export default AppLogic
