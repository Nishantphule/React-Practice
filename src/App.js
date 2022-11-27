import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome n="Raj" pic="https://source.unsplash.com/random/profile-man"/>
      <Welcome n="Nishant" pic="https://source.unsplash.com/random/profile-boy"/>
      <Welcome n="Pooja" pic="https://source.unsplash.com/random/profile-girl"/>
    </div>
  );
}

function Welcome({n,pic}){
  return (
    <div>
      <img src={pic} alt='dp'/>
      <h1>
        Hi , {n}
      </h1>
    </div>
  )

}

export default App;
