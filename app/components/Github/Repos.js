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

        return (<div>REPOS
                    Repos are : {this.props.repos}
        </div>)
    }
});





module.exports = Repos;