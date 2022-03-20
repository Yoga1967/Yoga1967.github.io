import logo from './logo.png';
import './App.css';
import './reset.css';

function App() {
  return (
    <div className="App">
      <div class="content">
        <div class="container">
          <div class="header">
            <div class="logo">
              <img src={logo} alt="Logo" />;
            </div>
            <div class="nav-links">
              <a href="javascript:void(0)">
                <p>Profile</p>
              </a>
              <a href="javascript:void(0)">
                <p>Projects</p>
              </a>
              <a href="javascript:void(0)">
                <p>Self Development</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="App1">
      <div class="content">
        <div class="container">
          <div class="header">
            <div class="logo">
              <img src={logo} alt="Logo" />;
            </div>
            <div class="nav-links">
              <a href="javascript:void(0)">
                <p>test</p>
              </a>
              <a href="javascript:void(0)">
                <p>Projects</p>
              </a>
              <a href="javascript:void(0)">
                <p>Self Development</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
export {
  App1,
}
