import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { ContactCard } from "src/components/ContactCard";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { fetchContactsAction, fetchGroupsAction } from "src/redux/actions";

export const GroupPage = () => {
    const dispatch = useAppDispatch();
    const { groups, loading: groupsLoading } = useAppSelector(
        (state) => state.groupsReducer
    );
    const { contacts, loading: contactsLoading } = useAppSelector(
        (state) => state.contactsReducer
    );
    const { groupId } = useParams<{ groupId: string }>();
    const currentGroup = groups.find((group) => group.id === groupId);
    const groupContacts = contacts.filter((contact) =>
        currentGroup?.contactIds.includes(contact.id)
    );

    useEffect(() => {
        dispatch(fetchGroupsAction());
        dispatch(fetchContactsAction());
    }, [dispatch]);

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
                    ) : groupContacts.length > 0 ? (
                        <Col>
                            <Row xxl={4} className="g-4">
                                {groupContacts.map((contact) => (
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
                        <ErrorMessage error="Контакты отсутствуют!" />
                    )}
                </>
            )}
        </Row>
    );
};
