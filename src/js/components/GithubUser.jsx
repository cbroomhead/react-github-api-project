var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;

var GithubUser = React.createClass({
    render: function () {
      if (!this.props.user) {
        return <div>LOADING FOLLOWERS...</div>
      }

      return (
        <div>
            <Link className="content-align" to={/user/+ this.props.user.login}>
                <img className="user-info__avatar" src={this.props.user.avatar_url}/>
                <div className="user-info"> {this.props.user.login}</div>
                
            </Link>
        </div>
      );
    }
})

module.exports = GithubUser;

//207.107.68.234