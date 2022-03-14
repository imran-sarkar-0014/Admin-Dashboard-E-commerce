import { useSelector } from 'react-redux';
import './app.css';
import Layout from './components/Layout';
import React from 'react';


const className = {
  app: "w-screen min-h-screen absolute inset-0 z-0"
}

function App() {

  const theme: any = useSelector<any>(state => state.ThemeReducer)

  React.useEffect(() => {

  }, [])

  return (
    <div className={className.app + ' ' + theme.mode + ' ' + theme.color}>
      <Layout />
    </div >
  );
}

export default App;
