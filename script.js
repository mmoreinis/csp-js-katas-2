/* RANDOM STUDENTS KATA:  */

// Who will be gatekeeper and keymaster today?

/* Function Main()
 * Display random gatekeeper name and keymaster name for this kata
 * @param = none
 * @return = none
 */
 // Initialize count as prompt asking how many students there are.
 // Initialize array students equal to addStudents with argument count
 // Initialize gateKeeper = randStudent(students), the name of a random student in the list
 // Initialize keyMaster = randNewStudent(students, student), name of a different random student
 // Display gatekeeper name and keymaster name for this kata

/* Function addStudents(count) 
 * Enters a set number of students to an array.
 * @param = count {integer}
 * @return = students {array}
 */
 // Initialize an array called students. 
 // Define for loop to run count times starting at 1
 // Push each student name into the array via user input ("student 1:")
 // Return the students array

/* Function randStudent(students)
 * This picks a random student from an array. 
 * @param = students {array}
 * @return = gateKeeper {string}
 */
 // Initialize student as a random number, 0 to < length of students array.
 // Initialize gateKeeper as the element in students array at that random index.
 // Return gateKeeper

/* Function randNewStudent(students, gateKeeper) 
 * This picks a student who was not already picked. 
 * @param = students {array}, gateKeeper {string}
 * @return = keyMaster {string}
 */
 // Initialize keyMaster as "none"
 // Initialize picked as false
 // Initialize student
 // Define loop, run while picked equals false
 // Set student as random index number, 0 to < length of students array.
 // Set keyMaster as element in students array at random index student
 // If keyMaster is not equal to gateKeeper, set picked equal to true
 // End the while loop.
 // Return keyMaster