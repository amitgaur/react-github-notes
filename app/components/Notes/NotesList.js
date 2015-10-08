/**
 * Created by agaur on 10/7/15.
 */
var React = require('react');


var NotesList = React.createClass({

    render : function(){


            var notesList  = this.props.notes.map(function(item){
                return <li key={item['.key']} className="list-group-item">{item['.value']}</li>

            });

            return (<ul className="list-group">{notesList}</ul>)





    }


});


module.exports = NotesList;