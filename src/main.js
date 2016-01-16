import ImagePreview from './components/ImagePreview'
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
  <ImagePreview src='/home/sam/projects/hello-electron/samples/cat-treats.jpg' />,
  document.getElementById('image-preview')
)
