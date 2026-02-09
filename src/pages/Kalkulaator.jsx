import React from 'react'
import RegularCalculator from '../components/RegularCalculator'
import LoanCalculator from '../components/LoanCalculator'
import MaxCalculator from '../components/MaxCalculator'



function Kalkulaator() {
  return (
    <div>
     <RegularCalculator />

     <br /><br />

     <LoanCalculator />

     <br /><br />

     <MaxCalculator />

    </div>
  )
}

export default Kalkulaator;