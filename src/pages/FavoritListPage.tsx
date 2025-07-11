import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { useGetContactsQuery } from "src/store/contacts";
import { fetchFavoritesAction } from "src/store/actions";

export const FavoritListPage = () => {
    const dispatch = useAppDispatch();
    const {
        favorites,
        loading: favoritesLoading,
        error: favoritesError,
    } = useAppSelector((state) => state.favoritesReducer);
    const {
        data: contacts,
        isLoading: contactsLoading,
        isError: contactsError,
    } = useGetContactsQuery();
    const favoritesContacts =
        contacts &&
        contacts.filter((contact) => favorites.includes(contact.id));

    useEffect(() => {
        dispatch(fetchFavoritesAction());
    }, [dispatch]);

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
};
