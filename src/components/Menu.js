import React, {Component} from 'react';

function MenuItem(props) {
  const {url, alt, title, detail} = props;
  return (
    <div className="w3-row">
      <div className="w3-col s12 m6 w3-padding-small"><img className="w3-image" src={url} alt={alt}/></div>
      <div className="w3-col s12 m6 w3-padding-small">
        <h5>{title}</h5>
        <p className="w3-text-grey">{detail}</p>
      </div>
    </div>
  )
}

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 'cupbop'
    }
    this.onClickMenu = this
      .onClickMenu
      .bind(this);
  }
  onClickMenu({target}) {
    this.setState({clicked: target.id});
  }
  renderCupbop() {
    return (
      <div id="Cupbop" className="w3-container menu w3-padding-48 w3-card">
        <MenuItem
          url="https://s19.postimg.cc/56xmadhib/ORG_DSC08349.jpg"
          alt="bbq-ck"
          title="BBQ CHICKEN CUPBOP $7"
          detail="Marinated with special soy sauce for 72 hours BBQ"/>
        <MenuItem
          url="https://s19.postimg.cc/ym3ajdtrn/ORG_DSC08336.jpg"
          alt="bbq-sp"
          title="BBQ SPICY PORK CUPBOP $7"
          detail="Marinated with special soy sauce for 72 hours BBQ"/>
        <MenuItem
          url="https://s19.postimg.cc/peb22ouf7/ORG_DSC08346.jpg"
          alt="bbq-bf"
          title="BBQ BEEF CUPBOP $7"
          detail="Marinated with special soy sauce for 72 hours BBQ"/>
        <MenuItem
          url="https://s19.postimg.cc/44nfrtj9f/ORG_DSC08339.jpg"
          alt="bbq-bb"
          title="BIBIM CUPBOP $8"
          detail="Vegan option"/>
      </div>
    )
  }

  renderDeepfry() {
    return (
      <div id="Deepfry" className="w3-container menu w3-padding-48 w3-card">

        <MenuItem
          url="https://s19.postimg.cc/5jp0gjs2b/ORG_DSC08343.jpg"
          alt="pop-ck"
          title="POPCORN CHICKEN $6"
          detail="Deep fried boneless chicken"/>

        <MenuItem
          url="https://s19.postimg.cc/gw1lyuvrn/ORG_DSC08334.jpg"
          alt="sp-roll"
          title="SPRING ROLL $5"
          detail="Deep fried spring roll"/>

        <MenuItem
          url="https://s19.postimg.cc/ym3ajwh2b/ORG_DSC08329.jpg"
          alt="gyoza"
          title="GYOZA $5"
          detail="Deep fried dumplings"/>

        <h5>TORNATO $5</h5>
        <p className="w3-text-grey">Tornado shaped potato fries</p><br/>

        <h5>TORNADO DOG $5</h5>
        <p className="w3-text-grey">Hot dog with tornado shaped potato fries</p><br/>

        <h5>FRENCH FRIES $5</h5>
        <p className="w3-text-grey">Deep fried potato fries</p>
      </div>
    )
  }

  renderDrink() {
    return (
      <div id="Drinks" className="w3-container menu w3-padding-48 w3-card">
        <h5>BUBBLE TEA</h5>
        <p className="w3-text-grey">Asian fusion tea</p><br/>

        <h5>BON BON</h5>
        <p className="w3-text-grey">Grape drink with real grape</p><br/>

        <h5>SODA</h5>
        <p className="w3-text-grey">Coke, Sprite, Fanta, etc.</p><br/>

        <h5>WATER</h5>
        <p className="w3-text-grey">Fresh purified water</p><br/>
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
            <div
              className="w3-col s12 m4 tablink pointer"
              onClick={this.onClickMenu}
              id="cupbop">CUPBOP (RICE BOWL)</div>
            <div
              className="w3-col s12 m4 tablink pointer"
              onClick={this.onClickMenu}
              id="deepfry">DEEP FRY</div>
            <div
              className="w3-col s12 m4 tablink pointer"
              onClick={this.onClickMenu}
              id="drink">DRINK</div>
          </div>

          {this.state.clicked === 'cupbop' && this.renderCupbop()}
          {this.state.clicked === 'deepfry' && this.renderDeepfry()}
          {this.state.clicked === 'drink' && this.renderDrink()}

          <img
            src="https://s19.postimg.cc/sl5lmscfn/ORG_DSC08318.jpg"
            alt="cupbop2"
            style={{
            width: '100%',
            maxWidth: '700px',
            marginTop: '32px'
          }}/>
        </div>
      </div>
    );
  }
}

export default Menu;