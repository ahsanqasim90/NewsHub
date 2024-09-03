import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://premium.vgc.no/v2/images/3bf11f2a-f712-425c-8238-68357553be2c?fit=crop&format=auto&h=1365&w=2048&s=0e5f764faeede7c9c0645197fa8824ecab27966f" : imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target='blank' className="btn btn-sn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
