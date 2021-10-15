import React from 'react'
import { HomeWrapper } from './home.styled'

import ShowItem from '../../components/show-item'

function Home() {
  return (
    <HomeWrapper>
      <ShowItem item_link="https://blog.aiwan.run/"
                item_des="My Blog" />
      <ShowItem item_link="https://tools.aiwan.run/"
                item_des="WebTools" />
    </HomeWrapper>
  )
}

export default Home