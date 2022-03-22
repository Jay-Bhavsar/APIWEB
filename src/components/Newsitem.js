import React, { Component } from 'react'


export class Newsitem extends Component {



  render() {
    let { title, description, imageurl, newsUrl } = this.props;
    return (
      <>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={!imageurl?"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" : imageurl} alt="/" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Know more</a>
          </div>
        </div>
      </>
    )
  }
}

export default Newsitem