const MIN = 90,
  MAX = 0

function RainbowBar(props) {
  const { spent, total } = props

  let value = MAX

  if (spent) {
    const percentage = (spent / total) * 100
    const inverse = 100 - percentage

    if (inverse > MIN) value = MIN
    else if (inverse < MAX) value = MAX
    else value = inverse
  }

  return (
    <div className="expenses__bar">
      <div className="expenses__progress" style={{ width: `${value}%` }}></div>
    </div>
  )
}

export default RainbowBar
