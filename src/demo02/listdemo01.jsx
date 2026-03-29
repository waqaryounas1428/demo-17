import { ListGroup } from "react-bootstrap";

export function ListDemo01({students}) {
    return (
        <>
            <ListGroup>
                {
                    students.map(s=><ListGroup.Item key={s} > {s} </ListGroup.Item>)
                }                
            </ListGroup>
        </>
    )
}