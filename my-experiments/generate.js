import fs from 'fs';
import path from 'path';

// 1. Define the folder structure needed inside 'src'
const directories = [
  'src/components',
  'src/data'
];

// 2. Define the exact file contents
const files = {
  'src/data/experiments.js': `export const experimentsData = [
  {
    id: 'exp1',
    title: 'Experiment 1: AES Encryption (Python)',
    code: \`def encrypt_data(data, key):
    # AES encryption logic here
    print("Encrypting with AES-256...")
    return encrypted_data\`
  },
  {
    id: 'exp2',
    title: 'Experiment 2: React Component Setup',
    code: \`import React from 'react';

export default function MyComponent() {
  return <div>Hello World</div>;
}\`
  },
  {
    id: 'exp3',
    title: 'Experiment 3: ESP32 Wi-Fi Connection',
    code: \`#include <WiFi.h>

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
}\`
  }
];`,

  'src/components/ExperimentBlock.jsx': `import React, { useState } from 'react';

export default function ExperimentBlock({ title, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="experiment-card">
      <div className="card-header">
        <h2>{title}</h2>
        <button 
          onClick={handleCopy} 
          className={\`copy-btn \${copied ? 'copied' : ''}\`}
        >
          {copied ? '✅ Copied!' : '📋 Copy Code'}
        </button>
      </div>
      <div className="code-container">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}`,

  'src/App.jsx': `import React from 'react';
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
          />
        ))}
      </main>
    </div>
  );
}`,

  'src/index.css': `:root {
  --bg-color: #f4f4f5;
  --text-main: #18181b;
  --card-bg: #ffffff;
  --code-bg: #282c34;
  --code-text: #abb2bf;
  --primary-btn: #0070f3;
  --success-btn: #10b981;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-main);
  margin: 0;
  padding: 0;
}

.container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
.app-header { text-align: center; margin-bottom: 40px; }
.app-header h1 { margin: 0 0 10px 0; font-size: 2.5rem; }
.app-header p { color: #71717a; font-size: 1.1rem; }

.experiment-card { background-color: var(--card-bg); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); margin-bottom: 30px; overflow: hidden; }
.card-header { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; border-bottom: 1px solid #e4e4e7; }
.card-header h2 { margin: 0; font-size: 1.25rem; }

.copy-btn { background-color: var(--primary-btn); color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; }
.copy-btn:hover { background-color: #005bb5; }
.copy-btn.copied { background-color: var(--success-btn); }

.code-container { background-color: var(--code-bg); padding: 20px 24px; overflow-x: auto; }
.code-container pre { margin: 0; }
.code-container code { font-family: 'Fira Code', monospace; color: var(--code-text); font-size: 0.95rem; line-height: 1.5; }`
};

// 3. Execute the generation
console.log('🚀 Generating project files...');

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created folder: ${dir}`);
  }
});

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(filePath, content);
  console.log(`📄 Created file: ${filePath}`);
});

console.log('✅ All done! Run `npm run dev` to start your app.');