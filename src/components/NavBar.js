import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { showMenu,showsetting} from '../actions/actions.js';



class NavBar extends Component {
    clicked=()=>{
        if (this.props.showsetting === "hide") {
            this.props.setting("show");
        }
        else {
            this.props.setting("hide");
        }
    }
    
    handleClick = () => {
        if (this.props.showMenu === "hide") {
            this.props.menu("show");
        }
        else {
            this.props.menu("hide");
        }
=======
import { showMenu, showSearch, showSettings } from '../actions/actions.js';


class NavBar extends Component {

  handleMenu = () => {
    this.props.settings("hide")
    if (this.props.showMenu === "hide") {
      this.props.menu("show");
    }
    else {
      this.props.menu("hide");
    }
  }
  handleSearch = () => {
    if (this.props.showSearch === "hide") {
      this.props.search("show");
>>>>>>> 8b98a552636a1a1031ed9df2d7a0dfe721ce60da
    }
    else {
      this.props.search("hide");
    }
  }

<<<<<<< HEAD
    render() {
        if (localStorage.getItem('gamesio')) {
            return (
                <div className="menu" >
                    <img className="navitem" alt="" src="./media/rightarrow.png" onClick={this.handleClick} style={{ display: this.props.showMenu === "show" ? "none" : "" }}></img>
                    <nav id="img-logo" className="row" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >
                        <img className="navitem" alt="" src="./media/leftarrow.png" onClick={this.handleClick}></img>
                        <Link to="/">
                            <input type="image" className="navitem" alt="Home" src="./media/house.png"></input>
                        </Link ><Link to="/signout">
                            <input type="image" className="navitem" alt="SignOut" src="./media/signout.png"></input>
                        </Link><Link to="/settings">
                            <input type="image" className="navitem" alt="Settings" src="./media/cog.png"></input>
                        </Link>
                            <input type="image" className="navitem" alt="Search" src="./media/search.png"></input>
                    </nav>
                </div>
            )
        } else {
            return (
                <div className="menu" >
                    <img className="navitem" alt="" src="./media/rightarrow.png" onClick={this.handleClick} style={{ display: this.props.showMenu === "show" ? "none" : "" }}></img>
                    <nav id="img-logo" className="row" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >
                        <img className="navitem" alt="" src="./media/leftarrow.png" onClick={this.handleClick}></img>
                        <Link to="/">
                            <input type="image" className="navitem" alt="Home" src="./media/house.png"></input>
                        </Link ><Link to="/signin">
                            <input type="image" className="navitem" alt="SignIn" src="./media/signin.png"></input>
                        </Link><Link to="/signup">
                            <input type="image" className="navitem" alt="SignUp" src="./media/signup.png"></input>
                        </Link>
                            <input type="image" className="navitem" alt="Settings" onClick={this.clicked} src="./media/cog.png"></input>
                       
                            <input type="image" className="navitem" alt="Search" src="./media/search.png"></input>
                    </nav>
                            <div className ='column' style={{ display: this.props.showsetting === "show" ? "" : "none" }}>
                                <div className ='nav'>color</div>
                                <div className ='nav'>language</div>
                                </div>
                            
                </div>
            );
        }
=======
  handleSettings=()=>{
    if (this.props.showSettings === "hide") {
        this.props.settings("show");
    }
    else {
        this.props.settings("hide");
>>>>>>> 8b98a552636a1a1031ed9df2d7a0dfe721ce60da
    }
  }

  render() {
    return (
      <div className="menu" >
        <input type="image" className="navitem" alt="" src="./media/rightarrow.png" onClick={this.handleMenu} style={{ display: this.props.showMenu === "show" ? "none" : "" }}></input>

        <nav id="img-logo" className="menu" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >

          <input type="image" className="navitem" alt="" src="./media/leftarrow.png" onClick={this.handleMenu}></input>

          <Link to="/">
            <input type="image" className="navitem" alt="Home" src="./media/house.png"></input>
          </Link >

          <Link to="/signin">
            <input type="image" className="navitem" alt="SignIn" style={{ display: this.props.showSign === "show" ? "none" : "" }} src="./media/signin.png"></input>
          </Link>

          <Link to="/signup">
            <input type="image" className="navitem" alt="SignUp" style={{ display: this.props.showSign === "show" ? "none" : "" }} src="./media/signup.png"></input>
          </Link>

          <Link to="/signout">
            <input type="image" className="navitem" alt="SignOut" style={{ display: this.props.showSign === "show" ? "" : "none" }} src="./media/signout.png"></input>
          </Link>

          <input type="image" className="navitem" alt="Settings" src="./media/cog.png" onClick={this.handleSettings}></input>

          <input type="image" className="navitem" alt="Search" src="./media/search.png" onClick={this.handleSearch}></input>
          
          <input type="serach" className="settingsitem" style={{ display: this.props.showSearch === "show" ? "" : "none" }} ></input>

        </nav>
          <div className ='settings column' style={{ display: this.props.showSettings === "show" ? "" : "none" }}>
            
            <Link to="/colors">
            <button className ='settingsitem'>Colors</button>
            </Link>

            <Link to="/language">
            <button className ='settingsitem'>Language</button>
            </Link>

          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
    return {
        showMenu: state.showMenu,
        showsetting:state.showsetting
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        menu: (z) => { dispatch(showMenu(z)) },
        setting:(z)=>{dispatch(showsetting(z))}
    }
=======
  return {
    showMenu: state.showMenu,
    showSearch: state.showSearch,
    showSign: state.showSign,
    showSettings:state.showSettings
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    menu: (z) => { dispatch(showMenu(z)) },
    search: (z) => { dispatch(showSearch(z)) },
    settings: (z) => { dispatch(showSettings(z)) }
  }
>>>>>>> 8b98a552636a1a1031ed9df2d7a0dfe721ce60da
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);