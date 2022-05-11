import { useReducer, useState } from 'react';
import styles from './Counter.css';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { /*color: state.color,*/ count: state.count + 1 }
    case 'DECREMENT':
      return { /*color: state.color,*/ count: state.count - 1 }
    case 'RESET':
      return { /*color: state.color,*/ count: 0 }
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  // const [currentColor, setCurrentColor] = useState(colors.yellow);

  // useEffect(() => {
  //   if (count === 0) {
  //     setCurrentColor(colors.yellow);
  //   }

  //   if (count > 0) {
  //     setCurrentColor(colors.green);
  //   }

  //   if (count < 0) {
  //     setCurrentColor(colors.red);
  //   }
  // }, [count]);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <main className={styles.main}>
      <h1 style={{ color: currentColor }}>{count}</h1>
      <div>
        <button
          type="button"
          onClick={handleIncrement}
          aria-label="increment"
          style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          aria-label="decrement"
          style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={handleReset}
          style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
