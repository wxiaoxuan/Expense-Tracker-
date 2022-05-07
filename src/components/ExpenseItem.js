import "./ExpenseItem.css";

//component
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* .toISOString() : a built in method available on all date objs */}
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

// export component
export default ExpenseItem;
