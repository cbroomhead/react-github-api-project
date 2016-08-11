var React = require('react');
var $ = require('jquery');
var GithubRepo = require('./GithubRepo');

var Repos = React.createClass({
     getInitialState : function (){
        return {};
    },
    _fetchData : function (){
      var _this = this;
        var GitHubApiUrl = `https://api.github.com/users/${this.props.params.username}/repos?access_token=b36ed65c1a632de748b91cf6f295cbbc441f468b`
 
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
         return  (<div> LOADING </div> )
        }
        else {
        return (
          <div>
            <hr/>
          <h3>Repos of {this.props.params.username}:</h3>
            {this.state.followers.map(function(repos) {
              return <GithubRepo key={repos.id} user={repos} />
            })}
          </div>
        );
        }
    }
    
})

module.exports = Repos;