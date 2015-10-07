/**
 * Created by agaur on 10/7/15.
 */
var React = require('react');
var NotesList = require('./NotesList');



var Notes = React.createClass({
    propTypes : {
        username  : React.PropTypes.string.isRequired,
        notes  : React.PropTypes.array.isRequired
    },
    render  : function(){

        return (<div>
            <h3>Notes </h3>
            <NotesList notes = {this.props.notes} />


        </div>)
    }
});





module.exports = Notes;