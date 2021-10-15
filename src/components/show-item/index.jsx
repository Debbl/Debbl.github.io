import React from 'react'

import { ShowItemWrapper } from './show-item.styled'


function ShowItem(props) {
  const { item_link, item_des } = props

  return (
    <ShowItemWrapper className="show-item-link" href={item_link}>
        <span>{item_des}</span>
    </ShowItemWrapper>
  )
}

export default ShowItem