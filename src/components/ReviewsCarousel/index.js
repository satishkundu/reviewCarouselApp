// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  rightClick = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  leftClick = () => {
    const {activeReview} = this.state
    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  renderReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="container">
        <img src={imgUrl} alt={username} />
        <p className="user">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    const currentReviewDetails = reviewsList[activeReview]

    return (
      <div className="bg-container">
        <div className="reviewContainer">
          <h1 className="heading">Reviews</h1>
          <button
            className="button"
            type="button"
            testid="leftArrow"
            onClick={this.leftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderReview(currentReviewDetails)}
          <button
            className="button"
            type="button"
            testid="rightArrow"
            onClick={this.rightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
