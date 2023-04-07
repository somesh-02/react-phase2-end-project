import logo from './logo.svg';
import './App.css';
import NavBar from './component/layout/Navbar';
import Users from './component/pokemons/Users';
import { Component } from 'react';
import axios from 'axios';
import Search from './component/pokemons/search';
import Page from './component/pokemons/Page';

class App extends Component {
  state={
    pokemons:[]
  }
  async componentDidMount()
  {
    const res =await axios.get(`http://localhost:5000/users`);
    this.setState({pokemons:res.data})
  }

  searchPokemons= async (text) => {
    console.log(text)
    const res =await axios.get(`http://localhost:5000/users?q=${text}`);
    this.setState({pokemons:res.data})
  }

  render(){
  return (
    <div className="App">
      <NavBar title="Pokemon Details App"/>
      <Search searchPokemons={this.searchPokemons}/>
      
      <div>
        <Page pokemons={this.state.pokemons}/>
      </div>
</div>
  );
}
}

export default App;
