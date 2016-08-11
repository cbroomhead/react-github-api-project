var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');



var Followers = React.createClass({
    getInitialState : function (){
        return {};
    },
    _fetchData : function (){
      var _this = this;
        var GitHubApiUrl = `https://api.github.com/users/${this.props.params.username}/followers?access_token=b36ed65c1a632de748b91cf6f295cbbc441f468b`
 
        $.getJSON(GitHubApiUrl, function(user) {
            _this.setState({ followers: user});
        })
    },
    componentDidUpdate: function (prevProps){
        if (this.props.params.username !== prevProps.params.username){
            this._fetchData();
        }
    },
    componentDidMount: function (){
        this._fetchData();
    },
    render: function() {
        
        if(!this.state || !this.state.followers){
         return  (<div> LOADING FOLLOWERS</div> )
        }
        else {
        return (
          <div>
            <hr/>
          <h3>Followers of {this.props.params.username} :</h3>
            
            {this.state.followers.map(function(follower) {
              return <GithubUser key={follower.id} user={follower} />
            })}
          </div>
        );
        }
    }
});

module.exports = Followers;