/**
 * Created by agaur on 10/7/15.
 */
var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
    propTypes : {
        username  : React.PropTypes.string.isRequired,
        notes  : React.PropTypes.array.isRequired,
        handleAddNote  : React.PropTypes.func.isRequired
    },
    render  : function(){
        console.log("Rendering notes", this.props.username);
        return (<div>
            <h3>Notes </h3>
            <AddNote username = {this.props.username} handleAddNote = { this.props.handleAddNote}/>
            <NotesList notes = {this.props.notes} />


        </div>)
    }
});





module.exports = Notes;