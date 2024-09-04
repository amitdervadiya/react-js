import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const increment = () => {
    setCount(count + 1);
    triggerAnimation('increment');
  };

  const decrement = () => {
    setCount(count - 1);
    triggerAnimation('decrement');
  };

  const reset = () => {
    setCount(0);
    triggerAnimation('reset');
  };

  const triggerAnimation = (type) => {
    let animation;
    switch (type) {
      case 'increment':
        animation = 'bounce-fade-animation';
        break;
      case 'decrement':
        animation = 'blur ';
        break;
      case 'reset':
        animation = 'fade-out-in ';
        break;
      default:
        animation = '';
    }

    setAnimationClass(animation);
    setTimeout(() => setAnimationClass(''), 1000);
  };

  return (
    <>
      <div id='root'>
        <div className='container'>
          <span className={animationClass} >
            {count}
          </span>
          <div>
            <button onClick={increment} className='button'>Increment</button>
            <button onClick={decrement} className='button'>Decrement</button>
            <button onClick={reset} className='button'>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
