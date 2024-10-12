import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    // const {todoDetails}=this.props
    // const {updatedTitle} = this.state
    this.setState({editing: false})
    // call a function to save updated title (not implemented in this code)
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleCompmete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.handleSave}>
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleCompmete(todoDetails.id)}
            />
            <p className="title">{todoDetails.title}</p>
            <button onClick={this.handleEdit} type="button">
              Edit
            </button>
            <button onClick={() => deleteTodo(todoDetails.id)} type="button">
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
