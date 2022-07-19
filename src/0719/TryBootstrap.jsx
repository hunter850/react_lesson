import { Fragment } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import BootstrapNav from "../components/BootstrapNav";

function TryBootstrap() {
    return (
        <Fragment>
            <BootstrapNav />
            <Container>
                <Col>
                    <Row>
                        <h1>Hello Bootstrap</h1>
                        <Button variant="primary">primary</Button>
                        <Button variant="secondary">secondary</Button>
                        <Button variant="danger">danger</Button>
                    </Row>
                </Col>
            </Container>
        </Fragment>
    );
}

export default TryBootstrap;
