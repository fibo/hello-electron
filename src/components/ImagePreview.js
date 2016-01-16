import React from 'react'

class ImagePreview extends React.Component {
  constructor () {
    super()

    this.state = {
      selected: false
    }
  }

  render () {
    const toggleSelection = this.toggleSelection.bind(this)

    return (
      <div>
        <img
          src={this.props.src}
          style={this.getImageStyle()}
          onClick={toggleSelection}
        />
      </div>
    )
  }

  getImageStyle () {
    const defaultBorder = '2px solid blue'
    const highlightedBorder = 'red'

    const imageStyle = {
      border: defaultBorder,
      borderColor: 'transparent',
      height: '100px'
    }

    if (this.state.selected) {
      imageStyle.borderColor = highlightedBorder
    }

    return imageStyle
  }

  toggleSelection () {
    this.setState({selected: !this.state.selected})
  }
}

ImagePreview.propTypes = {
  src: React.PropTypes.string.isRequired
}

export default ImagePreview
