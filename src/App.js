import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      {<div className="App-content">

      </div>}

    </div>
  );
}
export function Header() {
  return (
    <header className="App-header">
      <div className="App-title">
        Sudoku
      </div>
      <div className="App-header-right">
        <span>login</span>
        <span>sign up</span>
      </div>

    </header>
  )
}

const cellData = [
  [6, null, 1, null, null, 7, null, 2, null]
  [null, null, null, null, null, null, null, 1, 5]
  [2, 4, 9, null, null, null, null, null, 3]
  [4, null, 5, 8, null, 1, 3, 9, null]
  [3, 8, null, null, 4, 9, null, null, null]
  [null, 1, 6, null, 7, null, null, null, null]
  [8, null, 4, 1, 5, 3, 6, null, 2]
  [null, null, null, null, 6, 4, 8, 3, null]
  [1, 6, null, null, null, 2, null, null, 9]
];



export function Content() {
  const childLength = 9;
  function createChildBoxes() {
    const childBoxes = [];
    for (let i = 0; i < childLength; i++) {
      childBoxes.push(<div className="Child-box"><input className="Number-box" type="number" min="1" max="9" /></div>)
    }
    return childBoxes;
  }

  function renderBox() {
    return (
      <div className="Box">{createChildBoxes()} </div>
    )
  }

  const boxes = [];
  const boxLength = 9;
  for (let i = 0; i < boxLength; i++) {
    boxes.push(renderBox())
  }

  return (
    <div class="Wrapper">{boxes}</div >
  )
}
export default App;
