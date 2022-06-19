import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      searchValue: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.searchFunc(this.state.searchValue);
  }
  render() {
    return (
        <div className="search m-5 mx-auto" style={{width: "30rem"}}>
          <form onSubmit={this.handleSubmit}>
            <input style={{height: "2rem"}} size="50" type="search" onChange={this.onChange} value={this.state.searchValue}/>

          </form>
        </div>
    );
  }
}

export default Search;