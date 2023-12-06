import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import YourPassword from '../YourPassword'
import './index.css'

const initialPasswordsList = []
class PasswordManager extends Component {
  state = {
    passwordsList: initialPasswordsList,
    searchItem: '',
    website: '',
    username: '',
    password: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    if (website !== '' && username !== '' && password !== '') {
      return this.setState(prevState => ({
        passwordsList: [...prevState.passwordsList, newPassword],
        website: '',
        username: '',
        password: '',
      }))
    }
    return this.setState(prevState => ({
      passwordsList: prevState.passwordsList,
    }))
  }

  onDeletePasswordItem = id => {
    const {passwordsList} = this.state
    const unDeletedPasswords = passwordsList.filter(each => each.id !== id)
    return this.setState({passwordsList: unDeletedPasswords})
  }

  getWebsite = event => {
    this.setState({website: event.target.value})
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  getSearchItem = event => {
    this.setState({searchItem: event.target.value})
  }

  render() {
    const {passwordsList, searchItem, website, username, password} = this.state
    const searchResult = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return (
      <div className="bg-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="pm-logo-img"
        />
        <div className="bg-container2">
          <div className="add-new-password-container">
            <h1 className="new-password-text">Add New Password</h1>
            <form className="form-control" onSubmit={this.onSubmitForm}>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-img"
                />
                <input
                  value={website}
                  type="text"
                  placeholder="Enter Website"
                  className="website-input"
                  onChange={this.getWebsite}
                />
              </div>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-img"
                />
                <input
                  value={username}
                  type="text"
                  placeholder="Enter Username"
                  className="website-input"
                  onChange={this.getUsername}
                />
              </div>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-img"
                />
                <input
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                  className="website-input"
                  onChange={this.getPassword}
                />
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="pm-img"
            />
          </div>
        </div>
        <div className="bg-container3">
          <div className="your-password-container">
            <div className="no-of-password">
              <h1 className="heading">Your Passwords</h1>
              <p className="password-count-box">{searchResult.length}</p>
            </div>
            <div className="password-search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="website-img"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search"
                onChange={this.getSearchItem}
              />
            </div>
          </div>
          <div className="show-password-container">
            <input
              id="zxy"
              type="checkbox"
              value="checkbox"
              className="check-box"
            />
            <label htmlFor="xyz" className="show-password" value="checkbox">
              Show Passwords
            </label>
          </div>
          <ul className="list-container">
            {searchResult.map(each => (
              <YourPassword
                key={each.id}
                passwordDetails={each}
                onDeletePasswordItem={this.onDeletePasswordItem}
              />
            ))}
          </ul>
          {searchResult.length === 0 && (
            <div className="empty-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
