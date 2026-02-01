/* RANDOM STUDENTS KATA:  */

// Who will be gatekeeper and keymaster today?

/* Function Main()
 * Display random gatekeeper name and keymaster name for this kata
 * @param = none
 * @return = none
 */
 function main(){
    let count = prompt("How many students are in class today?");
    let students = addStudents(count);
    let gateKeeper = randStudent(students);
    let keyMaster = randNewStudent(students, gateKeeper);
    alert("Gatekeeper is " + gateKeeper + " and keyMaster is " + keyMaster);
 }

/* Function addStudents(count) 
 * Enters a set number of students to an array.
 * @param = count {integer}
 * @return = students {array}
 */
function addStudents(count){
 let students = [];
 for (let student = 1; student <= count; student++) {
    students.push(prompt("student "+student));
  }
  return students;
}

/* Function randStudent(students)
 * This picks a random student from an array. 
 * @param = students {array}
 * @return = gateKeeper {string}
 */
function randStudent(students){
    let student = Math.floor(Math.random()*students.length);
    let gateKeeper = students[student];
    return gateKeeper;
}

/* Function randNewStudent(students, gateKeeper) 
 * This picks a student who was not already picked. 
 * @param = students {array}, gateKeeper {string}
 * @return = keyMaster {string}
 */
function randNewStudent(students,gateKeeper){
    let keyMaster;
    let student;
    let picked = false;
    while (picked == false) {
        student = Math.floor(Math.random()*students.length);
        keyMaster = students[student];
        if (keyMaster != gateKeeper) picked = true;
    }
    return keyMaster;
}
