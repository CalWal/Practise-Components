import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="checkbox" />
          <p> Option 1 </p>
        </div>
        <div>
          <input type="checkbox" />
          <p> Option 2 </p>
        </div>
        <div>
          <input type="checkbox" />
          <p> Option 3 </p>
        </div>
      </div>
    );
  }
}

export default Todo;
