import React from 'react';
import ReactDOM from 'react-dom/client';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
