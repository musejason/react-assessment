function BreakdownList() {
  return <p>Welcome back, valued customer!</p>;
}
// this componant needs to receive the shopping data as props.
// It will render a BreakdownItem for each unique category value, with a total summed price of the items in that category.
// The list will be sorted from highest total cost to lowest.

function BreakdownItem() {
  return <p>Welcome back, valued customer!</p>;
}
// this componant needs to receive the category and summed total price as prop.

export default breakdownList;
