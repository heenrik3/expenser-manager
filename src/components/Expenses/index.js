import { Fragment, useState } from 'react'
import ExpensesList from '../ExpensesList'
import RainbowBar from '../RainbowBar'
import Modal from '../Modal'

function Expenses() {
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function onInputChange(value) {
    setBudget(value)
  }

  function handleInputChange(e) {
    const value = +e.target.value

    if (!isNaN(value)) onInputChange(value)
    else {
      e.target.value = ''
      onInputChange(0)
    }
  }

  function toggleModal() {
    setModalIsOpen(!modalIsOpen)
  }

  function addExpense(expense) {
    toggleModal()

    expenses.splice(0, 0, expense)

    setExpenses([...expenses])
  }

  function removeExpense(index) {
    setExpenses(expenses.filter((exp, i) => i !== index))
  }

  const spentAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0)

  return (
    <Fragment>
      <main className="expenses">
        <div>
          <div className="expenses__heading">
            <div className="expenses__display">
              <span>Orçamento</span>
              <div className="expenses__budget">
                <span>R$</span>{' '}
                <input
                  type="text"
                  className="expenses__input"
                  placeholder="0.00"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="expenses__actions">
              <button className="btn" onClick={toggleModal}>
                ADICIONAR DESPESA
              </button>
            </div>
          </div>
          <RainbowBar spent={spentAmount} total={budget} />
          <span className="expenses__message">
            Gastou {<b>R$ {spentAmount}</b>} de R$ {budget}
          </span>
        </div>

        <div>
          <ExpensesList expenses={expenses} onDelete={removeExpense} />
        </div>
      </main>
      {modalIsOpen && <Modal onCancel={toggleModal} onConfirm={addExpense} />}
    </Fragment>
  )
}

export default Expenses
