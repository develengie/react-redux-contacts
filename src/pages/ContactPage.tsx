import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard } from "src/components/ContactCard";
import Loader from "src/components/Loader";
import { useGetContactsQuery } from "src/store/contacts";

export const ContactPage: FC = () => {
    const { data, isLoading } = useGetContactsQuery();
    const { contactId } = useParams<{ contactId: string }>();
    const currentContact =
        data && data.find((contact) => contact.id === contactId);

    if (isLoading) {
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
