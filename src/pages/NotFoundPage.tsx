import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// const   img4 = require('../assets/img/not_found1.png')


export class NotFoundPage extends Component {
  render() {
    return (
      <Link to="/">
        <div className='container my-5' style={{
          width:"100%",
          height:"100vh",
          backgroundImage: 
          "url('https://cdn.dribbble.com/users/1147613/screenshots/14385164/media/252d4bd74979d9d0576db834d5608b28.mp4')",
          backgroundSize:"cover",
        }}
          ></div>
      </Link>
    )
  }
}

export default NotFoundPage;