import { useState } from 'react'

function Modal(props) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)

  function cancelHandler() {
    props.onCancel()
  }

  function confirmHandler() {
    props.onConfirm({ title, amount })
  }

  function titleHandler(e) {
    setTitle(e.target.value)
  }

  function valueHandler(e) {
    if (isNaN(e.target.value)) {
      e.target.value = ''
      setAmount(0)
      return
    }

    setAmount(+(+e.target.value).toFixed(2))
  }

  return (
    <div className="modal">
      <div className="modal__bg" onClick={cancelHandler}></div>
      <div className="modal__content">
        <h2>Nova Despesa</h2>
        <div className="modal__inputs">
          <div className="modal__input">
            <span>Título</span>
            <input type="text" onChange={titleHandler} />
          </div>
          <div className="modal__input">
            <span>Valor</span>
            <input type="text" onChange={valueHandler} placeholder="0.00" />
          </div>
        </div>
        <div className="modal__actions">
          <button className="modal__btn btn" onClick={cancelHandler}>
            CANCELAR
          </button>
          <button className="modal__btn btn" onClick={confirmHandler}>
            ADICIONAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
