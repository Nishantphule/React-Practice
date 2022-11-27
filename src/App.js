import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome
        name="Praveen"
        pic="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
      />
    </div>
  );
}

function Welcome({ pic, name }) {
  return (
    <div className='card'>
      <img className="user-pic" src={pic} alt={name} />
      <h1>Hi, {name} 🎉🎉</h1>
    </div>
  )

}

export default App;
