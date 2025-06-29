import { FC, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard } from "src/components/ContactCard";
import Loader from "src/components/Loader";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { fetchContactAction } from "src/redux/actions";

export const ContactPage: FC = () => {
    const dispatch = useAppDispatch();
    const { contact, loading } = useAppSelector(
        (state) => state.contactReducer
    );
    const { contactId } = useParams<{ contactId: string }>();

    useEffect(() => {
        dispatch(fetchContactAction(contactId!));
    }, [dispatch]);

    if (loading) {
        return <Loader />;
    }

    return (
        <Row xxl={3}>
            <Col className={"mx-auto"}>
                {contact && <ContactCard contact={contact} />}
            </Col>
        </Row>
    );
};
