import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, ListGroup } from "react-bootstrap";



export function BSDemo02(props) {
    return (
        <>

            <Card>
                {(props.heading) &&
                    <Card.Header className="bg-primary text-white" >
                        <Card.Title>
                            <h5 className="display-6">
                                {
                                    (props.icon) &&   <FontAwesomeIcon icon={props.icon} />
                                }
                                { props.heading }
                            </h5>
                        </Card.Title>
                    </Card.Header>
                }
                <Card.Body>
                    {/* <p className="lead" >
                        {props.children[0]}
                    </p> */}


                    {/* {props.children} */}


                    {/* <ListGroup>
                        { props.children.map(i => <ListGroup.Item> {i} </ListGroup.Item>) }                       
                        
                    </ListGroup> */}

                     {  (props.children && props.children.length>0)   
                        ? props.children
                        : "Contents are not available for this panel"
                     }



                </Card.Body>
            </Card>
        </>
    )
}