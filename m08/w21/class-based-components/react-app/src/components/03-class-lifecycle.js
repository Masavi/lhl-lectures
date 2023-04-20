import React, { Component } from 'react';

class ClassLifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Random Cat Image!',
      catUrl: null,
    }
  }

  // useEffect(() => {
  //   fetch('')
  // }, [])

  componentDidMount() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => {
        return response.json()
      })
      .then((apiCatData) => {
        const catUrl = apiCatData[0].url;
        this.setState({ catUrl })
      })
      .catch((err) => {
        console.log('Error:', err);
      })
  }

  componentDidUpdate() {
    console.log('Component updated!!! 👑');
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  componentWillUnmount() {
    console.log('Component unmounting 👋');
  }

  render() {
    return ( <>
      <h2>{ this.state.title }</h2>
      <input type="text"
        value={this.state.title}
        onChange={this.handleChange} />

      { this.state.catUrl
        ? (<img
            style={{ width: '300px' }}
            src={this.state.catUrl} alt="cat" />)
        : (<span>Loading...</span>)
      }

    </> );
  }
}

export default ClassLifecycle;
