/**
 * Created by agaur on 10/5/15.
 */
var React = require('react');
var Router = require('react-router').Router;
var routes = require('./config/routes');


React.render(<Router>{routes}</Router>, document.getElementById('app'));