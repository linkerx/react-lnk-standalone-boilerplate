var React = require('react');
require('./styles.less');

function Footer(props){

  var footerClass = 'normal';
  if(location.pathname == '/'){
    footerClass = 'oculto';
  }

  return (
    <section id='footer' className={footerClass}>
      <div className='izq-wrapper'>
        <div className='info'>
          <h1>Legislatura de Río Negro</h1>
          <span>
            San Martín 118, Viedma, Río Negro - Argentina<br />
            Tel. (54) 02920 - 421866
          </span>
        </div>

        <div className='mapa'>
          <div className='image'></div>
        </div>
      </div>
    </section>
  )
}

module.exports = Footer;
