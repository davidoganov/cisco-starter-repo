import Icon from './Icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sextant</h1>

        <br></br>

        <img src={Icon} className="App-logo" alt="logo" />  {/*Icon image credit: https://freeicons.io/profile/6156 */}

        <br></br>
        <br></br>
        
        <button style={{
          fontSize: '50px', fontWeight: 'bold', fontFamily: '-moz-initial',
          backgroundColor: 'rgba(45, 202, 195, 0.8)', marginBottom: '5px'
        }}>
          IP Information</button>
        <button style={{
          fontSize: '50px', fontWeight: 'bold', fontFamily: '-moz-initial',
          backgroundColor: 'rgba(45, 202, 195, 0.8)', marginBottom: '5px'
        }}>
          Latency Metrics</button>

        <br></br>
        
        <div>
          <button style={{
            fontSize: '36px', fontWeight: 'bold', fontFamily: '-moz-initial',
            backgroundColor: 'rgba(0, 253, 181, 0.45)', marginRight: '5px'
          }}>
            Deploy</button>
          <button style={{
            fontSize: '36px', fontWeight: 'bold', fontFamily: '-moz-initial',
            backgroundColor: 'rgba(0, 253, 181, 0.45)', marginRight: '5px'
          }}>
            Troubleshoot</button>
        </div>

      </header>
    </div>
  );
}

export default App;
