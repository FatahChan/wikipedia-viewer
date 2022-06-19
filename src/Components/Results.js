import React from 'react';
import ResultCard from "./ResultCard";
class Results extends React.Component {
  render() {
    const resultsCards = this.props.results.map((result) =>
      <ResultCard id={result.pageid} preview={result.snippet} key={result.pageid} title={result.title}/>
    )
    return (
        <div>
          {resultsCards}
        </div>
    );
  }
}

export default Results;