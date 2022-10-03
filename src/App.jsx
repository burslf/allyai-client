import './App.css';
import zoomSdk from '@zoom/appssdk';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    getConfigResponse()
  }, []);

  const getConfigResponse = async () => {
    const configResponse = await zoomSdk.config({
      popoutSize: {width: 480, height: 360},
      capabilities: ["shareApp"]
    })
    console.log(configResponse)
    return configResponse
  }
  
  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}

export default App;
