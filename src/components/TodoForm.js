import React from 'react'

export default props =>
  <form>
    <input
      autoFocus
      value={props.inputValue}
      onChange={props.handleOnChange}
      data-testId='input-box'
      type='text'
      className="new-todo"
      placeholder="What needs to be done?"/>
  </form>
