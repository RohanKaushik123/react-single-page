import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <header>
        <h1>React Single Page</h1>
        <p>This is a simple React single-page application.</p>
      </header>
      <main>
        <button onClick={() => setCount((count) => count + 1)}>
          Clicked {count} time{count === 1 ? '' : 's'}
        </button>
      </main>
    </div>
  );
}

export default App;
