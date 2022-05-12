import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from './reducer'
import { useStateValue } from './StateProvider'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div>
        <CurrencyFormat renderText={(value) => (
            <>
             ({basket?.length} items):
            <strong> Rs. {value} </strong>
            </>
        )} 
        decimalScale = {2}
        value = {getBasketTotal(basket) + (basket.length>3?100:basket.length*40) + getBasketTotal(basket)*0.18 - getBasketTotal(basket)*0.10}
        displayType = {'text'}
        thousandSeperator = {true}
        />
    </div>
  )
}

export default Subtotal