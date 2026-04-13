import './ConfirmModal.css'

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Confirmar acción</h3>
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onClose} className="modal-btn cancel">Cancelar</button>
          <button onClick={onConfirm} className="modal-btn confirm">Confirmar</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal