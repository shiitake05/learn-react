// function MyButton({ title }: { title: string }) {
//   return (
//     <button>{title}</button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton title="I'm a button" />
//     </div>
//   );
// }

// interface MyButtonProps {
//   /** The text to display inside the button */
//   title: string;
//   /** Whether the button can be interacted with */
//   disabled: boolean;
// }

// function MyButton({ title, disabled }: MyButtonProps) {
//   return (
//     <button disabled={disabled}>{title}</button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton title="I'm a disabled button" disabled={true}/>
//     </div>
//   );
// }


// useReducer
// import {useReducer} from 'react';

// interface State {
//    count: number 
// };

// type CounterAction =
//   | { type: "reset" }
//   | { type: "setCount"; value: State["count"] }

// const initialState: State = { count: 0 };

// function stateReducer(state: State, action: CounterAction): State {
//   switch (action.type) {
//     case "reset":
//       return initialState;
//     case "setCount":
//       return { ...state, count: action.value };
//     default:
//       throw new Error("Unknown action");
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(stateReducer, initialState);

//   const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
//   const reset = () => dispatch({ type: "reset" });

//   return (
//     <div>
//       <h1>Welcome to my counter</h1>

//       <p>Count: {state.count}</p>
//       <button onClick={addFive}>Add 5</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// useContext
// import { createContext, useContext, useState } from 'react';

// type Theme = "light" | "dark" | "system";
// const ThemeContext = createContext<Theme>("system");

// const useGetTheme = () => useContext(ThemeContext);

// export default function MyApp() {
//   const [theme, setTheme] = useState<Theme>('light');

//   return (
//     <ThemeContext.Provider value={theme}>
//       <MyComponent />
//     </ThemeContext.Provider>
//   )
// }

// function MyComponent() {
//   const theme = useGetTheme();

//   return (
//     <div>
//       <p>Current theme: {theme}</p>
//     </div>
//   )
// }

// import { createContext, useContext, useState, useMemo } from 'react';

// // This is a simpler example, but you can imagine a more complex object here
// type ComplexObject = {
//   kind: string
// };

// // The context is created with `| null` in the type, to accurately reflect the default value.
// const Context = createContext<ComplexObject | null>(null);

// // The `| null` will be removed via the check in the Hook.
// const useGetComplexObject = () => {
//   const object = useContext(Context);
//   if (!object) { throw new Error("useGetComplexObject must be used within a Provider") }
//   return object;
// }

// export default function MyApp() {
//   const object = useMemo(() => ({ kind: "complex" }), []);

//   return (
//     <Context.Provider value={object}>
//       <MyComponent />
//     </Context.Provider>
//   )
// }

// function MyComponent() {
//   const object = useGetComplexObject();

//   return (
//     <div>
//       <p>Current object: {object.kind}</p>
//     </div>
//   )
// }


// DOMイベント
import { useState } from 'react';

export default function Form() {
  const [value, setValue] = useState("Change me");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </>
  );
}