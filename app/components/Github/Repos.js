/**
 * Created by agaur on 10/7/15.
 */
var React = require('react');



var Repos = React.createClass({
    propTypes : {
        username  : React.PropTypes.string.isRequired,
        repos  : React.PropTypes.array.isRequired
    },
    render  : function(){
        console.log("Rendering Repos", this.props.username);
        var repos = this.props.repos.map(function(repo, index){
                return ( <li className="list-group-item" key={index}>
                    {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                    {repo.description && <p> {repo.description}</p>}
                </li>);

        });

        return (<div>
            <h3>Repositories for {this.props.username} </h3>

            <ul className="list-group">

                {repos}
            </ul>

        </div>)
    }
});





module.exports = Repos;