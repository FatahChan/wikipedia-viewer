import React from 'react';
import Search from "./Components/Search";
import Results from "./Components/Results";
import axios from "axios";
const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&origin=*&srlimit=20&srsearch="

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.search = this.search.bind(this);
  }
  search(term){
    console.log(term)
    axios.get(url + term)
        .then((res) => {
          console.log(res.data.query.search);
          console.log(res.data)
          this.setState({
            results: res.data.query.search
          })
        }).catch((err) => {console.log(err)});
  }
  render() {
    return (
        <div className="container">
            <Search searchFunc={this.search}/>
            <Results results={this.state.results}/>

        </div>
    );
  }
}

export default App;