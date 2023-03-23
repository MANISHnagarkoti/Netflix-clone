import React from 'react'
import styled from "styled-components"
import Slider from '../component/Sider'
import { API } from '../api/api'
import Genre from '../component/Genre'
import Tvcomponenet from '../component/Movieslider'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

const Container = styled.div`
margin: auto;
width: 100%;
min-height:calc(100vh - 60px) ;
background-position:center;
background-size: cover;
overflow-x: hidden;
margin-top: 50px;

max-width: 1480px;


`


const LoadingWrapper = styled.div`

min-height: 110vh;
display: flex;
align-items: center;
justify-content: center;

img{

width: 150px;

}

`


const Home = () => {



  // const [load, lload] = useState(true)



  // useEffect(() => {

  //   lload(true)

  //   setTimeout(() => lload(false), 1500)


  // }, [])



  // if (load) {

  //   return (

  //     <LoadingWrapper>


  //       <img style={{ backgroundColor: "black" }} src="images/loading.svg" alt="" />
  //     </LoadingWrapper>

  //   )

  // }




  return (



    <Container>



      <Tvcomponenet />
      <Genre />

      
      <Slider type={API.trending} tagline="Trending" />
      <Slider type={API.upcoming} tagline="Upcoming" />


      {/* <Viewer/> */}
      <Slider type={API.toprated} tagline="Top Rated" />




    </Container>



  )
}

export default Home
