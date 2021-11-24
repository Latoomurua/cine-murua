import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper style={{background: "yellow"}}>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "black"}}><Logo>Cine Murua</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "black"}}><MenuItem>Peliculas</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "black"}}><MenuItem>Series</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "black"}}><MenuItem>Infantiles</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem style={{textDecoration: "none", color: "black"}}>REGISTER</MenuItem>
                    <MenuItem style={{textDecoration: "none", color: "black"}}>SIGN IN</MenuItem>
                    <MenuItem><Link to='/cart'><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;