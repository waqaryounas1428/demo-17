import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function StepperUI({ min, max, init }) {

    //let counter=7;

    //reack hooks
    //most common hook is useState
    //it has one parameter, it has initial value of the variable
    //useState returns an array
    //first item in array is the variable. it can be accessed directly but its value should not be changed directly
    //second item in array is a function used to change value of the variable
    const [counter, setCounter] = useState(Number(init));

    function handleIncrement(e) {
        e.stopPropagation();
        setCounter(p => {
            if (p < Number(max)) return p + 1
            return p;
        });
    }

    function handleDecrement(e) {
        e.stopPropagation();
        setCounter(p => {
            if (p > Number(min)) return p - 1
            return p;
        });
        // const temp = e.target.innerText;
        //  const temp = e.currentTarget.innerHTML;
        //alert(`parent of ${temp} clicked`);
    }


    function handleGrandParentClick(e) {
        const v = e.currentTarget.getAttribute("data-value");
        alert(`Current value is ${v}`);
    }


    return (
        <>
            <div className="d-flex" onClick={handleGrandParentClick} data-value={counter} >
                <div>
                    <Button type="button" variant="primary" onClick={handleDecrement}>
                        <FontAwesomeIcon icon="fas fa-minus" />
                    </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ width: "50px" }} >
                    {counter}
                </div>
                <div>
                    <Button type="button" variant="primary" onClick={handleIncrement}>
                        <FontAwesomeIcon icon="fas fa-plus" />
                    </Button>
                </div>

                {/* <div>
                    <Button type="button" variant="primary">
                        Extra1
                    </Button>
                </div>
                <div>
                    <Button type="button" variant="primary">
                        Extra2
                    </Button>
                </div> */}
            </div>
        </>
    )
}