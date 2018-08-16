import React, {Component} from 'react';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 'eat'
    }
    this.onClickMenu = this
      .onClickMenu
      .bind(this);
  }
  onClickMenu({target}) {
    this.setState({clicked: target.id});
  }
  renderEat() {
    return (
      <div id="Eat" className="w3-container menu w3-padding-48 w3-card">
        <h5>BIBIM CUPBOP $8</h5>
        <p className="w3-text-grey">Toppings: Beef (bulgogi), Pork (spicy), or Chicken</p><br/>

        <h5>BEEF BULGOGI CUPBOP $7</h5>
        <p className="w3-text-grey">description...</p><br/>

        <h5>SPICY PORK CUPBOP $7</h5>
        <p className="w3-text-grey">description...</p><br/>

        <h5>CHICKEN CUPBOP $7</h5>
        <p className="w3-text-grey">description...</p><br/>

        <h5>POPCORN CHICKEN $5</h5>
        <p className="w3-text-grey">description...</p><br/>

        <h5>FRENCH FRIES $5</h5>
        <p className="w3-text-grey">description...</p>
      </div>
    )
  }
  renderDrink() {
    return (
      <div id="Drinks" className="w3-container menu w3-padding-48 w3-card">
        <h5>Coffee</h5>
        <p className="w3-text-grey">Regular coffee 2.50</p><br/>

        <h5>Chocolato</h5>
        <p className="w3-text-grey">Chocolate espresso with milk 4.50</p><br/>

        <h5>Corretto</h5>
        <p className="w3-text-grey">Whiskey and coffee 5.00</p><br/>

        <h5>Iced tea</h5>
        <p className="w3-text-grey">Hot tea, except not hot 3.00</p><br/>

        <h5>Soda</h5>
        <p className="w3-text-grey">Coke, Sprite, Fanta, etc. 2.50</p>
      </div>
    )
  }
  render() {
    return (
      <div className="w3-container" id="menu">
        <div className="w3-content" style={{
          maxWidth: '700px'
        }}>

          <h5 className="w3-center w3-padding-48">
            <span className="w3-tag-red w3-wide">THE MENU</span>
          </h5>

          <div className="w3-row w3-center w3-card w3-padding">
            <div className="w3-col s6 tablink pointer" onClick={this.onClickMenu} id="eat">Eat</div>
            <div className="w3-col s6 tablink pointer" onClick={this.onClickMenu} id="drink">Drink</div>
          </div>

          {this.state.clicked === 'eat' ? this.renderEat() : this.renderDrink()}

          <img
            src="./images/cupbop2.jpg"
            alt="cupbop2"
            style={{
            width: '100%',
            maxWidth: '1000px',
            marginTop: '32px'
          }}/>
        </div>
      </div>
    );
  }
}

export default Menu;