var Link = require('react-router').Link;
var React = require('react');

var GithubRepo = React.createClass({
    render: function () {
      return (
        <div>
            <a target="_blank" href={this.props.user.html_url} className="user-info__stats">
            <div className="user-info__stats2"> {this.props.user.name}</div>
            <div className="repo-count"> {this.props.user.stargazers_count} ★</div>
          </a>
        </div>
      );
    }
})

module.exports = GithubRepo;