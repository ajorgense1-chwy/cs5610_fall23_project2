import { useContext } from "react";
import { GradeContext } from "./GradeProvider";

export default function TextRow(props) {
    // eslint-disable-next-line react/prop-types
    const [gradeHistoryState, setGradeHistoryState, randomNumber] = useContext(GradeContext);

    console.log(randomNumber);

    const currentGradeValue = gradeHistoryState[props.idx]

    function deleteElement() {
        const newGradeHistoryState = []
        for(let i = 0; i < gradeHistoryState.length; i++) {
            if(i !== props.idx) {
                newGradeHistoryState.push(gradeHistoryState[i])
            }
        }
        setGradeHistoryState(newGradeHistoryState);

    }

    return (<div>
        {/* <p />
        {props.children} */}
    <span>{currentGradeValue.name}</span> - 
    <span>{currentGradeValue.grade}</span> {currentGradeValue.lastName}
    <button onClick={() => deleteElement()}>Delete</button>

</div>)

}

/*

GradeProvider
    -StudentGrades
        -TextRow
            -> can access gradeHistory, or any other value from GradeProvider


*/