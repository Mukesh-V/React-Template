import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { 
    Container,
    } from 'reactstrap'

import './Home.css';

class Home extends React.Component{

    styles = makeStyles(theme=>({
        
    }));

    render(){
        return(
            <div>
                <Container>

                </Container>
            </div>
        )
    }
}

export default Home