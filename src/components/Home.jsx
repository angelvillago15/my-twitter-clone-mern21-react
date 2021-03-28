import React, { useState } from 'react';
import {Container, Row, Col } from 'reactstrap';

import HeaderDashboard from './HeaderDashBoard';
import MyPostList from './post/MyPostList';
import PostList from './post/PostList';

export default function Home(props){

  const [show, setShow] = useState(<PostList />);
 
  const handleLogout = () => { //te devuelve al principio
    sessionStorage.clear();
    props.history.push("/");
  }

  const handleOnShow = (option) => {
    if (option === 1){
      setShow(<PostList />);
    }else if (option === 2){
      setShow(<MyPostList />);
    }
  }

  if (sessionStorage.getItem("name") === null){
    props.history.push("/");
  }
  else{
    return (
      <Container>
        <Row>
          <Col><HeaderDashboard onLogout={handleLogout} onShow= {handleOnShow} /></Col> 
        </Row>
        <Row>
          <Col xs="12">
              {show}
            </Col>
        </Row>
      </Container>
    );
  }
}