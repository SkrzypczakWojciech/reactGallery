var movie = {
  title: 'Harry Potter',
  src: 'https://i.redd.it/9l8txmyi2fxz.jpg'
};

var poster = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('img', {src: this.props.image.src})
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
        React.createElement('p', {}, {this.props.title})
      )
    )
  },
});

var element = React.createElement(poster, {image: movie},
	React.createElement(MovieTitle,{title: movie}));

  ReactDOM.render(element, document.getElementById('app'));