import React, { useEffect } from 'react';
import styled from 'styled-components';
import './dash.css';
import Carder from './Carder';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';


const Container = styled.div`
  /* Styles for the container */
`;

const Input = styled.input`
  /* Styles for the input */
`;

const Label = styled.label`
  /* Styles for the label */
`;

const Nav = styled.nav`
  /* Styles for the nav */
`;

const Dashboard = () => {

    return (
        <Container>
            <Sidebar/>
            <div className="home" id='funcards'>
            <Carder/>
            <Carder/>
            <Carder/>
            </div>
            <div className="home" id='funcards'>
            <Carder/>
            <Carder/>
            <Carder/>
            </div>
        </Container>
    );
};

export default Dashboard;
