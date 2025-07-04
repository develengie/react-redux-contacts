import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { ContactCard } from "src/components/ContactCard";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { useGetGroupsQuery } from "src/store/groups";
import { useGetContactsQuery } from "src/store/contacts";

export const GroupPage = () => {
    const { data: groups, isLoading: groupsLoading } = useGetGroupsQuery();
    const { data: contacts, isLoading: contactsLoading } =
        useGetContactsQuery();
    const { groupId } = useParams<{ groupId: string }>();
    const currentGroup = groups && groups.find((group) => group.id === groupId);
    const groupContacts =
        contacts &&
        contacts.filter((contact) =>
            currentGroup?.contactIds.includes(contact.id)
        );

    if (groupsLoading) {
        return <Loader />;
    }

    return (
        <Row className="g-4">
            {currentGroup && (
                <>
                    <Col xxl={12}>
                        <Row xxl={3}>
                            <Col className="mx-auto">
                                <GroupContactsCard
                                    groupContacts={currentGroup}
                                />
                            </Col>
                        </Row>
                    </Col>
                    {contactsLoading ? (
                        <Loader />
                    ) : groupContacts!.length > 0 ? (
                        <Col>
                            <Row xxl={4} className="g-4">
                                {groupContacts!.map((contact) => (
                                    <Col key={contact.id}>
                                        <ContactCard
                                            contact={contact}
                                            withLink
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    ) : (
                        <ErrorMessage error="Something went wrong!" />
                    )}
                </>
            )}
        </Row>
    );
};
