
import { UniversalAppContainer } from "../../../components"
import { UserCard } from "../components";

const user = { id: 'UscGVUZsBKWlL3IGj4wOjTUe0EC3', email: 'thesecondstephenzhu@gmail.com' }

export function Network() {
    return (
        <UniversalAppContainer>
            <UserCard user={user} />
        </UniversalAppContainer>
    );
}