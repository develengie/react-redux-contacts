import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { groupsStore } from "../store";

export const GroupListPage = observer(() => {
    const groups = groupsStore.groups;
    const groupsLoading = groupsStore.loading;
    const groupsError = groupsStore.error;

    useEffect(() => {
        groupsStore.getGroups();
    }, []);

    return (
        <Row xxl={4}>
            {groupsLoading && <Loader />}
            {groupsError && <ErrorMessage error="Something went wrong!" />}
            {groups &&
                groups.map((group) => (
                    <Col key={group.id}>
                        <GroupContactsCard groupContacts={group} withLink />
                    </Col>
                ))}
        </Row>
    );
});
