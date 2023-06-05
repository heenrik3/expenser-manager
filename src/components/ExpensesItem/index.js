function ExpensesItem(props) {
  const { expense, index } = props

  function handleDelete(e) {
    props.onDelete(index)
  }

  return (
    <li className="expenses__item">
      <span className="expenses__title">{expense.title}</span>

      <div>
        <span className="expenses__amount">R$ {expense.amount}</span>

        <button className="expenses__delete btn" onClick={handleDelete}>
          x
        </button>
      </div>
    </li>
  )
}

export default ExpensesItem
