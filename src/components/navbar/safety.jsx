import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./navbar.module.css";

// export const Header = () => {
  export const Header = ({onSignup, onBackToLogin, onBackToDropfile}) => {
    const handleSendClick = () => {
      alert("This page/functionality is under development");
    };
  return (
    <section className={styles.container}>
      <Navbar bg="light" expand="lg" className="navbar-custom fixed-top">
        <Container fluid>
          <Navbar.Brand href="#">File Fly</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" className="navbar-collapse">
            <Nav className="me-auto mb-2 mb-lg-0">
              {/* <Nav.Link href="#" active>Home</Nav.Link>
              <Nav.Link href="#" active>Send</Nav.Link>
              <Nav.Link href="#" active>Receive</Nav.Link>
              <Nav.Link href="#" active>Login</Nav.Link>
              <Nav.Link href="#" active>Sign up</Nav.Link> */}
              <Nav.Link href="#" active data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={onBackToDropfile}>Home</Nav.Link>
              <Nav.Link href="#" active data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={handleSendClick}>Send</Nav.Link>
              <Nav.Link href="#" active data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={handleSendClick}>Receive</Nav.Link>
              <Nav.Link href="#" active data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={onBackToLogin}>Login</Nav.Link>
              <Nav.Link href="#" active data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={onSignup}>Sign up</Nav.Link>
              {/* <Nav.Link href="#" active onClick={onSignup}>Sign up</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};




// import React from "react";
// import styles from "./navbar.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Navbar, Nav} from "react-bootstrap";
// export const Header = () => {
//     return (
//         <section className={styles.container}>
//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </section>
//     );
// };