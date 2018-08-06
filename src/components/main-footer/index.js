import React, { Component } from 'react'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react';


class MainFooter extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Segment inverted vertical color='teal'>
                <Container textAlign='center'>
                    <Image centered size='mini' src='https://www.rubykraft.com/assets/logo-be937eb914dfe98b514c900d1fc6e56214158065e595207e2483dd116595f389.png' />
                    <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>
                        Site Map
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Contact Us
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
                    </List.Item>
                    </List>
                </Container>
            </Segment>

        )
    }
}
export default MainFooter