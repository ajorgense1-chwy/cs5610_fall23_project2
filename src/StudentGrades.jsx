import { useContext, useState } from "react"
import TextRow from "./TextRow";
import { GradeContext } from "./GradeProvider";

export default function StudentGrades() {
    const [nameState, setNameState] = useState('');
    const [gradeState, setGradeState] = useState('');
    const [gradeHistoryState, setGradeHistoryState, randomNumber, studentNameList] =  useContext(GradeContext);

    function onInputName(event) {
        setNameState(event.target.value)
    }

    function onGradeInput(event) {
        setGradeState(event.target.value)
        console.log(gradeState)
    }

    function submitGrade() {
        // console.log(gradeHistoryState)
        // gradeHistoryState.push({grade: gradeState, name: nameState})
        const newGradeHistoryState = [{grade: gradeState, name: nameState}];
        for(let i = 0; i < gradeHistoryState.length; i++) {
            newGradeHistoryState.push(gradeHistoryState[i]);
        }

        setGradeHistoryState(newGradeHistoryState);
        setNameState('');
        setGradeState('');
    }

    const gradeHistoryComponents = [];
    for(let i = 0; i < gradeHistoryState.length; i++) {
        const gradeHistoryComponent = (<TextRow idx={i} />)
        /* props => {
            name: gradeHistoryItem.name,
            grade: gradeHistoryItem.grade
            randomNumber: 7
            punctuation: "!"
        }*/
        gradeHistoryComponents.push(gradeHistoryComponent);
    }

    let emptyHistoryComponent = null;
    if(gradeHistoryComponents.length === 0) {
        emptyHistoryComponent = (
            <div>Insert History Here</div>
        )
    }

    return (<div>
        <p>Name:</p>
        <input onInput={(event) => onInputName(event)} value={nameState} />
        <p >Grade:</p>
        <input onInput={(event) => onGradeInput(event)} value={gradeState} />
        <button onClick={() => submitGrade()}>Submit</button>
        <p >List of Grades</p>
        {emptyHistoryComponent}
        {gradeHistoryComponents}
    </div>)

}


let word = "banana";

function returnWord() {

    return word + "!";

}

const output = returnWord();

word = 'apple';

console.log(output)