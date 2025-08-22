import React from 'react';

// The App.css import is removed as it was causing a compilation error.
// You can add styles directly with Tailwind CSS classes.

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Your React App!</h1>
        <p className="text-lg text-gray-600 mb-4">
          This is a simple React application with `index.html`, `package.json`, and `App.jsx`.
        </p>
        <p className="text-md text-gray-500">
          You can edit `App.jsx` to start building your UI.
        </p>
      </header>
    </div>
  );
}

// Ensure the main component is exported as default.
export default App;
