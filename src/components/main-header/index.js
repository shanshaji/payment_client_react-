import React, { Component } from 'react'
import {
    Container,
    Divider,
    Dropdown,
    Header,
    Image,
    Menu,
  } from 'semantic-ui-react';
  import {Link} from 'react-router-dom';

class MainHeader extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Menu fixed='top'  color='teal'>
                <Container>
                    <Menu.Item as={Link} name='homepage' to='/' header>
                    Cybrilla Payment
                    </Menu.Item>          
                </Container>
            </Menu>

        )
    }
}
export default MainHeader