
var MoviePoster = React.createClass({
  propTypes: {
    poster: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('img', {src: this.props.poster.src})
      )
    )
  },
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('p', {name: this.props.title.name})
      )
    )
  },
});

var poster = {
  src: 'https://i.redd.it/9l8txmyi2fxz.jpg'
};

var title = {
	name: 'Harry Potter'
};

var element = React.createElement(MoviePoster, {poster: poster},
	React.createElement(MovieTitle, {title: title})
	);


ReactDOM.render(element, document.getElementById('app'));