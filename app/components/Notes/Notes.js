/**
 * Created by agaur on 10/7/15.
 */
var React = require('react');



var Notes = React.createClass({
    propTypes : {
        username  : React.PropTypes.string.isRequired,
        notes  : React.PropTypes.array.isRequired
    },
    render  : function(){

        return (<div>Notes are {this.props.notes}


        </div>)
    }
});





module.exports = Notes;