import React, { Component } from 'react'
import Newsitem from './Newsitem'
import './New.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style>


export class News extends Component {

  constructor() {
    super();
    console.log("i am constructor");
    this.state = {
      articles: [],
      loading: false,
      page:1,
      
    }
  }


  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6c8cfd949ff244169c2d5d0b435f773f&page=1";
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      page:1,
      
    })

  }
  handleNextClick = async () => {
    console.log("this is next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6c8cfd949ff244169c2d5d0b435f773f&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      page:this.state.page+1,
      
    })



  }
  handlePrevClick = async () => {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6c8cfd949ff244169c2d5d0b435f773f&page=${this.state.page-1}";
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      page:this.state.page-1,
      
    })
  }

  render() {
    return (
      <>
        <div className="container mx-auto">
          <h1 className="text-center">Newsbar-Top Headlines</h1>

          <div className="row">
            {this.state.articles.map((element) => {
              return <div className=" box col-md-3 mx-5" key={element.url}>
                <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>Previous</button>

            <button type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next</button>
          </div>
        </div>
      </>
    )
  }
}

export default News