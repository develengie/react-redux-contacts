import { useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { useGetContactsQuery } from "src/store/slices/ContactsSlice";
import { useGetGroupsQuery } from "src/store/slices/GroupsSlice";

export const ContactListPage = () => {
    const {
        data: contacts,
        isLoading: contactsLoading,
        isError: contactsError,
    } = useGetContactsQuery();
    const { data: groups } = useGetGroupsQuery();
    const [filter, setFilter] = useState<Partial<FilterFormValues>>({});

    const filteredContacts = useMemo(() => {
        let findContacts: ContactDto[] = contacts!;

        if (filter.name) {
            const filterName = filter.name.toLowerCase();
            findContacts = findContacts.filter(
                ({ name }) => name.toLowerCase().indexOf(filterName) > -1
            );
        }

        if (filter.groupId) {
            const groupContacts = groups!.find(
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

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm
                    groupContactsList={groups!}
                    initialValues={{}}
                    onSubmit={setFilter}
                />
            </Col>
            {contactsLoading && <Loader />}
            {contactsError && <ErrorMessage error="Something went wrong!" />}
            <Col>
                <Row xxl={4} className="g-4">
                    {filteredContacts &&
                        filteredContacts.map((contact) => (
                            <Col key={contact.id}>
                                <ContactCard contact={contact} withLink />
                            </Col>
                        ))}
                </Row>
            </Col>
        </Row>
    );
};
