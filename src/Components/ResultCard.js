import React from 'react';

class ResultCard extends React.Component {
  render() {
    return (
        <div className="card m-2" style={{width: "auto"}}>
          <a style={{textDecoration: "none"}} href={`https://en.wikipedia.org/?curid=${this.props.id}`}>
            <div className="card-body" style={{color: "black"}}>
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.preview }}></p>
              {/*<a href="#" className="btn btn-primary"></a>*/}
            </div>
          </a>
        </div>
    );
  }
}

export default ResultCard;