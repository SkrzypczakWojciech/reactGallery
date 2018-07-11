
var Movie = React.createClass({
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

var poster = {
  src: 'https://i.redd.it/9l8txmyi2fxz.jpg'
};

var MovieTitle = {
	name: 'Harry Potter'
};

var MovieDesc = {
	desc: 'film o harrym potterze'
};

var element = React.createElement(Movie, {poster: poster});

ReactDOM.render(element, document.getElementById('app'));