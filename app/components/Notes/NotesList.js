/**
 * Created by agaur on 10/7/15.
 */
var React = require('react');


var NotesList = React.createClass({

    render : function(){


            var notesList  = this.props.notes.map(function(item, i){
                return <li key={i} className="list-group-item">{item}</li>

            });

            return (<ul className="list-group">{notesList}</ul>)





    }


});


module.exports = NotesList;