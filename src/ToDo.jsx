// export default function ToDo({task}) {

//     const taskClass = {

//         textAlign : "left"
//     }
//     return (

//         <div style={taskClass}>
//             <li>Task: {task}</li>
//         </div>
//     )
// }



// export default function ToDo({ task, isDone }) {

//     const taskClass = {

//         textAlign: "left"
//     }


//     return (
//         isDone ? <li style={taskClass}> Done: {task}</li> : <li style={taskClass}>Pending : {task}</li>
//     )

// }



// export default function ToDo({ task, isDone }) {

//     const taskClass = {

//         textAlign: "left"
//     }

//     if (isDone) {

//         return (<li style={taskClass}> Done: {task} ✓</li>)
//     } else {

//         return (<li style={taskClass}>Pending : {task} </li>)
//     }

    


// }



// export default function ToDo({ task, isDone }) {

//     const taskClass = {

//         textAlign: "left"
//     }

//     return (

//         isDone && <li style={taskClass}> Done: {task} ✓</li>
//     )



// }




export default function ToDo({ task, isDone }) {

    const taskClass = {

        textAlign: "left"
    }

    return (

        isDone ||<li style={taskClass}>Pending : {task} </li>
    )



}