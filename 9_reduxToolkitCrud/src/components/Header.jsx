import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeTheme } from "../redux/slices/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counterReducer);
  const { tasks } = useSelector((store) => store.crudReducer);
  const { isStatus } = useSelector((store) => store.themeReducer);
  const handleToggle = () => {
    dispatch(changeTheme(!isStatus));
  };
  return (
    <Navbar
      bg={isStatus ? "light" : "dark"}
      data-bs-theme={isStatus ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand href="/">Redux Toolkit</Navbar.Brand>
        <Nav className="d-flex align-items-center me-1">
          <NavLink to="/" className="me-4">
            Crud
            <span className="rounded p-1">({tasks.length})</span>
          </NavLink>
          <NavLink to="/counter">
            Counter
            <span className="rounded p-1">({count})</span>
          </NavLink>
          <Button
            className="ms-3"
            onClick={handleToggle}
            variant={isStatus ? "dark" : "light"}
          >
            {isStatus ? "light" : "dark"}{" "}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
