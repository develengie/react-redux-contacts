import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import Loader from "src/components/Loader";
import ErrorMessage from "src/components/ErrorMessage";
import { useGetGroupsQuery } from "src/store/slices/GroupsSlice";

export const GroupListPage = () => {
    const { data, isLoading, isError } = useGetGroupsQuery();

    return (
        <Row xxl={4}>
            {isLoading && <Loader />}
            {isError && <ErrorMessage error="Something went wrong!" />}
            {data &&
                data.map((group) => (
                    <Col key={group.id}>
                        <GroupContactsCard groupContacts={group} withLink />
                    </Col>
                ))}
        </Row>
    );
};
