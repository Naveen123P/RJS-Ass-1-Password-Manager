import './index.css'

const YourPassword = props => {
  const {passwordDetails, onDeletePasswordItem} = props
  const {id, website, username, password} = passwordDetails

  const deletePassword = () => {
    onDeletePasswordItem(id)
  }

  return (
    <li className="list-item">
      <div className="f-l-container">{website[0]}</div>
      <div className="details-container">
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
      <button
        data-testid="delete"
        className="delete-button"
        type="button"
        onClick={deletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default YourPassword
