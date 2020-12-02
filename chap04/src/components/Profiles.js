import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;
const Profiles = () => {
  return (
    <Container>
      <Title>사용자 목록</Title>
      <ul>
        <li>
          <Link to="/profiles/jhCho">조중현</Link>
        </li>
        <li>
          <Link to="/profiles/aaaa">AAAA</Link>
        </li>
      </ul>
      <hr />
      <Route
        path="/profiles"
        exact={true}
        render={() => <div>사용자를 선택해 주세요!</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </Container>
  );
};

export default Profiles;
