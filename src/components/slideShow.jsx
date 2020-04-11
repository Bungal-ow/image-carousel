import React from 'react'
import Picture from './picture.jsx'
import {Arrow1, Arrow2} from './arrow.jsx'
import { Container, Box, TopImage, BoxText, TopImageContainer } from "./stylePage.jsx";



class SlideShow extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentImageIndex: this.props.index,
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = this.props.urls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide () {
        const lastIndex = this.props.urls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

    render () {
        
      return (
          <TopImageContainer className="slideshow" style={{backgroundColor: 'dimgrey'}}>
            <Arrow1 direction="left" clickFunction={ this.previousSlide } />
            <TopImage src={this.props.urls[this.state.currentImageIndex]}>
              
              
        </TopImage>

            <Arrow2 direction="right" clickFunction={ this.nextSlide }/>
            
          <h1 onClick={this.props.return} style={{position: 'absolute', top: '10px', right:'10px'}}>X</h1>
          </TopImageContainer>
      );
    }
  }

export default SlideShow