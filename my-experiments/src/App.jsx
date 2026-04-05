import React from 'react';
import ExperimentBlock from './components/ExperimentBlock';
import { experimentsData } from './data/experiments';
import './index.css';

export default function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1>Lab Experiments Repo</h1>
        <p>Instant copy-paste snippets for practicals.</p>
      </header>

      <main className="experiments-list">
        {experimentsData.map((exp) => (
          <ExperimentBlock 
            key={exp.id} 
            title={exp.title} 
            code={exp.code} 
            image={exp.image} /* 👇 This is the magic line that was missing! 👇 */
          />
        ))}
      </main>
    </div>
  );
}