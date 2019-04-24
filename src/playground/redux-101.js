import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: `INCREMENT`,
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: `DECREMENT`,
  decrementBy
});

const setCount = () => ({
  type: `SET`,
  count: action.count
});

const resetCount = () => ({
  type: `RESET`,
  count: 0
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 100 }));

store.dispatch();

store.dispatch({
  type: "INCREMENT"
});

store.dispatch(incrementCount());

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

store.dispatch({
  type: "SET",
  count: 101
});
