  import * as React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import SimpleForm from './SimpleForm';
import { PeoplePage } from './complex/features/people/page';

export default function App() {
  return (
    <>
      <SimpleForm />
      {/* <PeoplePage /> */}
    </>
  )
}

const rootElement = document.getElementById('root')!

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
