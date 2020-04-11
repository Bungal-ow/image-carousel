import React from "react";
import axios from 'axios'
import SlideShow from './slideShow.jsx'
import Modal from './modal.jsx'
import { Container, Box, TopImage, BoxText, TopImageContainer } from "./stylePage.jsx"; // check these styles!



class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fakeHouse: {},
      fakeUrls: [],
      firstHouse: {},
      slideShow: false,
      currentIndex: 0
    }
    this.returnHome = this.returnHome.bind(this)
  }

  componentDidMount() {
    let otherThis = this;
    let randNum = Math.floor(Math.random() * (10000000 - 1) + 1)
    axios({
      method: 'GET',
      url: `/api/photos/${randNum}`
    })
      .then(function (response) {
        let first = 'https://image-carousel.s3.us-west-1.amazonaws.com/fakeHouse' + response.data[0].url;
        let others = response.data.slice(1);
        let urls = others.map( link => `https://image-carousel.s3.us-west-1.amazonaws.com/fakeHouse${link.url}`)
        // set the state to contain our fakeHouse data
        console.log(urls)
        otherThis.setState({
          fakeUrls: urls,
          firstHouse: first
        })
      })
  }
  returnHome() {
    this.setState({slideShow: false})
  }

  render() {

    if (this.state.slideShow) {
      return (
        <div>
           <SlideShow index={this.state.currentIndex} urls={this.state.fakeUrls} return={this.returnHome}/>
        </div>
      )
    }
    
    return (
      <div>
      <TopImageContainer>
      <TopImage src={this.state.firstHouse}>
        </TopImage></TopImageContainer>
      <Container>
        {this.state.fakeUrls.map( (obj, index) => (
        <Box src={obj} onClick={() => {this.setState({slideShow: true, currentIndex: index})}} key={index} bgColor='red' image={obj}>
        </Box>
        ))}
      </Container></div>
    );
  }
}

export default Home