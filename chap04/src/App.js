import { Route, Link, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home";
import About from "./components/About";
import Profiles from "./components/Profiles";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
  height: 50px;

  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};

  transition: border-bottom 0.5s ease-in-out;
`;

// styled-components를 이용해서 스타일링 시 기존 컴포넌트를 상속한 형태로 스타일링
const StyledLink = styled(Link)`
  height: 50px;
  align-items: center;
  justify-content: center;
`;

function App() {
  console.log(window.location.pathname);
  return (
    <>
      <GlobalStyles />
      <Header>
        <List>
          <Item current={window.location.pathname === "/"}>
            <StyledLink to="/">홈</StyledLink>
          </Item>
          <Item current={window.location.pathname === "/about"}>
            <StyledLink to="/about">소개</StyledLink>
          </Item>
          <Item current={window.location.pathname === "/profile"}>
            <StyledLink to="/profiles">프로필</StyledLink>
          </Item>
        </List>
      </Header>

      {/* Switch : 여러 개의 컴포넌트 중 하나의 컴포넌트만 화면에 띄워주는 역할 */}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
      </Switch>
    </>
  );
}

export default withRouter(App);
