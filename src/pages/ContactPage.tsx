import { FC, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard } from "src/components/ContactCard";
import Loader from "src/components/Loader";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { fetchContactsAction } from "src/redux/actions";

export const ContactPage: FC = () => {
    const dispatch = useAppDispatch();
    const { contacts, loading } = useAppSelector(
        (state) => state.contactsReducer
    );
    const { contactId } = useParams<{ contactId: string }>();
    const currentContact = contacts.find((contact) => contact.id === contactId);

    useEffect(() => {
        dispatch(fetchContactsAction());
    }, [dispatch]);

    if (loading) {
        return <Loader />;
    }

    return (
        <Row xxl={3}>
            <Col className={"mx-auto"}>
                {currentContact && <ContactCard contact={currentContact} />}
            </Col>
        </Row>
    );
};
