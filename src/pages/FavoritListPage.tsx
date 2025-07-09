import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { ContactCard } from "src/components/ContactCard";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { contactsStore, favoritesStore } from "../store";

export const FavoritListPage = observer(() => {
    const favorites = favoritesStore.favorites;
    const favoritesLoading = favoritesStore.loading;
    const favoritesError = favoritesStore.error;
    const contacts = contactsStore.contacts;
    const contactsLoading = contactsStore.loading;
    const contactsError = contactsStore.error;
    const favoritesContacts =
        contacts &&
        contacts.filter((contact) => favorites.includes(contact.id));

    useEffect(() => {
        favoritesStore.getFavorites();
        contactsStore.getContacts();
    }, []);

    return (
        <Row xxl={4} className="g-4">
            {(favoritesLoading || contactsLoading) && <Loader />}
            {favoritesError && <ErrorMessage error="Something went wrong!" />}
            {contactsError && <ErrorMessage error="Something went wrong!" />}
            {favoritesContacts &&
                favoritesContacts.map((contact) => (
                    <Col key={contact.id}>
                        <ContactCard contact={contact} withLink />
                    </Col>
                ))}
        </Row>
    );
});
