import "./App.css";
import Counter from "./reduxDemo/Counter";
import { Provider } from "react-redux";
import { counterReducer } from "./reduxDemo/CounterReducer";
import { configureStore } from "@reduxjs/toolkit";

function App() {
  const store = configureStore({ reducer: counterReducer });
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* The <Provider> component makes the Redux store available to any nested components that need to access the Redux store. */}
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
