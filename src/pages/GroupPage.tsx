import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { ContactCard } from "src/components/ContactCard";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { fetchContactsAction, fetchGroupAction } from "src/redux/actions";

export const GroupPage = () => {
    const dispatch = useAppDispatch();
    const { group, loading: groupLoading } = useAppSelector(
        (state) => state.groupReducer
    );
    const { contacts, loading: contactsLoading } = useAppSelector(
        (state) => state.contactsReducer
    );
    const { groupId } = useParams<{ groupId: string }>();
    const groupContacts = contacts.filter((contact) =>
        group?.contactIds.includes(contact.id)
    );

    useEffect(() => {
        dispatch(fetchGroupAction(groupId!));
        dispatch(fetchContactsAction());
    }, [dispatch]);

    if (groupLoading) {
        return <Loader />;
    }

    return (
        <Row className="g-4">
            {group && (
                <>
                    <Col xxl={12}>
                        <Row xxl={3}>
                            <Col className="mx-auto">
                                <GroupContactsCard groupContacts={group} />
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
