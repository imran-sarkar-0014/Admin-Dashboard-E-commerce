import './app.css';
import Layout from './components/Layout';

const className = {
  app: "w-screen min-h-screen fixed inset-0 z-0"
}

function App() {
  return (
    <div className={className.app}>
      <Layout />
    </div >
  );
}

export default App;
