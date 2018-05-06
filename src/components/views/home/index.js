var React = require('react');

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state  = {
      allLoaded: true
    }
    this.initHome = this.initHome.bind(this);
  }

  componentDidMount(){
    this.initHome();
  }

  initHome(){
    // cuando termine de cargar
    setTimeout(function(){this.props.show()}.bind(this), 3000);
  }

  render(){
    return (
      <section id='home'>
      </section>
    )
  }
}

module.exports = Home;
