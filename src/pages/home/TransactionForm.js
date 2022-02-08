import { useState, useEffect } from 'react'
import Add from '../../components/Add'
import { useFirestore } from '../../hooks/useFirestore'

export default function TransactionForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFirestore('transactions')
// const arr =[]
  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      uid, 
      name, 
      amount,
    })
  }
//   const handleSubmit2 = (e) => {
//     e.preventDefault()
//     arr.push(amount);
// console.log(arr)
//   }





  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])

  return (
    <>
      <h3>Add a Transaction</h3>
      <Add val={amount}/>
      <form onSubmit={handleSubmit}
     //a onClick ={handleSubmit2}
      
      >
        <label>
          <span>Transaction name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)} 
            value={amount} 
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  )
}