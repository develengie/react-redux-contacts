import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { fetchGroupsAction } from "src/store/actions";

export const GroupListPage = () => {
    const dispatch = useAppDispatch();
    const { groups, loading, error } = useAppSelector(
        (state) => state.groupsReducer
    );

    useEffect(() => {
        dispatch(fetchGroupsAction());
    }, [dispatch]);

    return (
        <Row xxl={4}>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {groups.map((group) => (
                <Col key={group.id}>
                    <GroupContactsCard groupContacts={group} withLink />
                </Col>
            ))}
        </Row>
    );
};
