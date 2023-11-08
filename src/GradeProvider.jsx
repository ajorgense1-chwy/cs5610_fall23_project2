import { createContext, useState } from "react";

export const GradeContext = createContext();

export default function GradeProvider(props) {

    const [gradeHistoryState, setGradeHistoryState] = useState([]);
    const [listOfStudentNames, setListOfStudentNames] = useState([]);
    const numberOfGrades = gradeHistoryState.length;

    const randomNumber = 11;

    return <GradeContext.Provider value={[gradeHistoryState, setGradeHistoryState, randomNumber, listOfStudentNames, setListOfStudentNames, numberOfGrades]}>
        {props.children}
    </GradeContext.Provider>


} 

/*
    <GradeProvider>

        <App /> -> can accesss gradeHistoryState & setGradeHistoryState

    </GradeProvider
*/


function SimpleComponent() {

    return <ChildComponent>
        <div>Hello, from inside the child component</div>
    </ChildComponent>
}

function ChildComponent(props) {
    return (

        <b>
            {props.children}
            {/*  children = <div>Hello, from inside the child component</div>
 */}
        </b>
    )
}