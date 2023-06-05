import ExpensesItem from '../ExpensesItem'

function ExpensesList(props) {
  const { expenses } = props

  function handleDelete(index) {
    props.onDelete(index)
  }

  return (
    <ul className="expenses__list">
      {expenses.map((expense, i) => (
        <ExpensesItem
          key={i}
          expense={expense}
          index={i}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ExpensesList
