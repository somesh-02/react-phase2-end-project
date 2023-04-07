import React, { Component } from 'react'

class Search extends Component{
    state={
        text:''
    };

    

   
    onSubmit = (e) =>
    {
        e.preventDefault();
        this.props.searchPokemons(this.state.text);
        this.setState({text:''});
    }
    onChange = (e) => {
        this.setState({text:e.target.value})
        console.log(this.state.text)
    }

    render(){
  return (
    <div>
        <form className='form' onSubmit={this.onSubmit}>
            <input 
            type='text' 
            name='text' 
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
            />
            <input type='submit' value='Search' id='search-button' className='btn btn-dark btn-block'/>
        </form>
      </div>
  );
}
}

export default Search;
