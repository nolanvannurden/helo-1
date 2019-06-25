import React, {Component} from 'react'

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      posts: [{title: 'harry potter', username: 'jK rolling', profilePicture: 'data:image/jpeg;base64,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'}],
      searchTerm: '',
      searchMyPosts: false
    }
  }

  handleSearchTerm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckBox = () => {
    this.setState({
      searchMyPosts: !this.state.searchMyPosts
    })
  }
  
  render(){
    let mappedPosts = this.state.posts.map((element, index) => {
      return(
        <div key={index}>
          <h4>{element.title}</h4>
          <h4>{element.username}</h4>
          <img src={element.profilePicture} alt=''/>
        </div>
      )
    })

    return(
    <div>
      <div>
        <h1>Dashboard</h1>
        <input
          type='text'
          name='searchTerm'
          placeholder='Search'
          onChange={this.handleSearchTerm}
        />
        <button>Search</button>
        <button>Reset</button>
        <h4>My Posts</h4>
        <input
        type='checkbox'
        name='searchMyPosts'
        onChange={this.handleCheckBox}
        />
      </div>

      <div>
        {mappedPosts}
      </div>
    </div>
    )
  }
}

export default Dashboard 