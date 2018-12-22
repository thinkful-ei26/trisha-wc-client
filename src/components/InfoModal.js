import React from 'react';
import { gotIt } from '../actions/nav';
import { connect } from 'react-redux';

export function InfoModal(props) {
  
    return (
      <div className="info-overlay" id="modal">
        <div className="info-content">
          <h3>How to use this app</h3>
          <div>
            <p>Bacon ipsum dolor amet alcatra chicken filet mignon beef. Pork belly turkey tri-tip pork boudin chicken ribeye, cow kevin beef ribs tongue cupim sausage ground round. Bresaola venison andouille shankle doner, ball tip prosciutto buffalo beef fatback meatball pork loin. Tri-tip salami bresaola beef ribs ham hock. Fatback sirloin brisket, pig hamburger turkey landjaeger prosciutto beef capicola pork loin cow. Turducken chuck rump kevin tri-tip, beef ribs cow venison doner strip steak leberkas swine pork pig.</p>
            <p>
            Corned beef cow ground round chuck. Spare ribs pork belly jerky pastrami flank jowl, pork loin landjaeger cow. Leberkas cupim kevin tenderloin beef ribs. Turducken prosciutto swine pork belly corned beef, chuck beef ribs. Swine doner cow, short ribs ribeye pork loin brisket bresaola rump boudin ground round spare ribs landjaeger picanha salami.
            </p>
            {/* <a 
            className="close" href="#info"
            onClick={ () => props.dispatch(gotIt()) }
            >Got It!</a> */}
             <button 
            className="close"
            onClick={ () => props.dispatch(gotIt()) }
            >Got It!</button>
          </div>
        </div>
      </div>
    );
}

export const mapStateToProps = state => ({
  info: state.navReducer.info
});

export default connect(mapStateToProps)(InfoModal);