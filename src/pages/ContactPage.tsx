import { FC, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { ContactCard } from "src/components/ContactCard";
import Loader from "src/components/Loader";
import { contactsStore } from "../store";

export const ContactPage: FC = observer(() => {
    const contacts = contactsStore.contacts;
    const contactsLoading = contactsStore.loading;
    const { contactId } = useParams<{ contactId: string }>();
    const currentContact =
        contacts && contacts.find((contact) => contact.id === contactId);

    useEffect(() => {
        contactsStore.getContacts();
    }, []);

    if (contactsLoading) {
        return <Loader />;
    }

    return (
        <Row xxl={3}>
            <Col className={"mx-auto"}>
                {currentContact && <ContactCard contact={currentContact} />}
            </Col>
        </Row>
    );
});
