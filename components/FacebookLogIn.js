import React from 'react';
import FacebookLogin from 'react-facebook-login';
const lodash = require('lodash'); //get lodash library

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facebook: {}
    };
  }

  responseFacebook = (response) => {
    if(response.status !== 'unknown'){
      this.setState({
        facebook: response
      });
    }
    console.log('this state',this.state.facebook)
  }

  render(){
    const pictureUrl = lodash.get(this.state,'facebook.picture.data.url','')

    if(!lodash.isEmpty(this.state.facebook)){
      return(
        <div> 
          <div>
            {'Welcome ' + this.state.facebook.name + ". Don't worry about the shitty design. It's gonna improve!"}
          </div>
          <img src={pictureUrl} alt="boohoo" className="img-responsive" />
        </div>
      )
    }

    return (
        <FacebookLogin
          appId="1831104913596961"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          callback={this.responseFacebook}
          onClick={this.onClick}
        />
    );
  } 
}

export default LogIn;



