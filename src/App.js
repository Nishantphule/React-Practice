import './App.css';

function App() {
  
  const users = ["Yashika","Nishant","Rupesh"]
  
  return (
    <div className="App">
      {/* <Welcome n="Raj" pic="https://th.bing.com/th/id/OIP.ZgqwDEYzf2SZ9XniZH1YTwHaH9?w=186&h=200&c=7&r=0&o=5&pid=1.7"/>
      <Welcome n="Nishant" pic="https://th.bing.com/th/id/OIP.StBOWlrvi-z4oqJ2pkze0AHaLc?w=115&h=180&c=7&r=0&o=5&pid=1.7"/>
      <Welcome n="Pooja" pic="https://th.bing.com/th/id/OIP.3jnJbcHULatXuIdQsmVKowHaEK?w=289&h=180&c=7&r=0&o=5&pid=1.7"/> */}
      
      {users.map((nm) => <User name={nm}/>)}
      
      
    </div>
  );
}

function User({name}){
  return (
    <div>
      {/* <img src={pic} alt='dp'/> */}
      <h1>
        Hi , {name} 
      </h1>
    </div>
  )

}

export default App;
