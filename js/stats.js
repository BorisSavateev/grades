/*  stats.js */

/**
 * @param {array} grades
 * @param {number} grade
 */
 export function addGrade(grades, grade) {
	grades.push(grade)
	return grades
}

/**
 * @param {array} grades
 */
export function getNumberOfGrades(grades) {
	return grades.length
}

/**
 * @param {array} grades
 */
export function getFirstGrade(grades) {
	return grades[0]
}

/**
 * @param {array} grades
 */
export function getLastGrade(grades) {
	return grades[[grades.length]-1]
}

/**
 * @param {array} grades
 */
export function isTestTooEasy(grades) {
	let sum = 0
	grades.forEach(function(grade) {
  	sum = sum + grade
	})
	if (sum / grades.length >= 12) return true
	else return false
	/*не понял условие, сделал если среднее значение больше 12*/ 
}

/**
 * @param {array} grades
 * @param {number} grade
 */
export function gradeExists(grades, grade) {
	return grades.includes(grade)
}

/**
 * @param {array} grades
 */
export function exportCSV(grades) {
	return grades.join(", ")
}