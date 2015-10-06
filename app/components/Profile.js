/**
 * Created by agaur on 10/5/15.
 */

var React = require('react');
var Router = require('react-router');


var Profile = React.createClass({
    getInitialState : function(){

        return { bio :{}, notes:[], repos : []}
    },
    render : function(){

            return (<div className="col-md-16">HI</div>);

    }
});


module.exports = { Profile};