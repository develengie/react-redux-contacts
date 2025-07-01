import { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { fetchContactsAction, fetchGroupsAction } from "src/store/actions";

export const ContactListPage = () => {
    const dispatch = useAppDispatch();
    const { contacts, loading, error } = useAppSelector(
        (state) => state.contactsReducer
    );
    const { groups } = useAppSelector((state) => state.groupsReducer);
    const [filter, setFilter] = useState<Partial<FilterFormValues>>({});

    const filteredContacts = useMemo(() => {
        let findContacts: ContactDto[] = contacts;

        if (filter.name) {
            const filterName = filter.name.toLowerCase();
            findContacts = findContacts.filter(
                ({ name }) => name.toLowerCase().indexOf(filterName) > -1
            );
        }

        if (filter.groupId) {
            const groupContacts = groups.find(
                ({ id }) => id === filter.groupId
            );

            if (groupContacts) {
                findContacts = findContacts.filter(({ id }) =>
                    groupContacts.contactIds.includes(id)
                );
            }
        }

        return findContacts;
    }, [filter, contacts, groups]);

    useEffect(() => {
        dispatch(fetchContactsAction());
        dispatch(fetchGroupsAction());
    }, [dispatch]);

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm
                    groupContactsList={groups}
                    initialValues={{}}
                    onSubmit={setFilter}
                />
            </Col>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            <Col>
                <Row xxl={4} className="g-4">
                    {filteredContacts.map((contact) => (
                        <Col key={contact.id}>
                            <ContactCard contact={contact} withLink />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};
