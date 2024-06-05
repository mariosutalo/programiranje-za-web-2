const subject1 = { name: 'Hrvatski', grade: 3 }
const subject2 = { name: 'Engleski', grade: 2 }
const subject3 = { name: 'Matematika', grade: 2 }
const subject4 = { name: 'Informatika', grade: 4 }
const subject5 = { name: 'Web projekti', grade: 2 }

function printGrades(subject) {
    console.log(`Subject name is: ${subject.name}, grade is: ${subject.grade}`)
}

printGrades(subject1)
printGrades(subject2)
printGrades(subject3)
printGrades(subject4)
printGrades(subject5)

function calculateGrades(){
    const averageGrade = (subject1.grade + subject2.grade + subject3.grade + subject4.grade + subject5.grade) / 5
    const p = document.querySelector('.result-p')
    p.innerHTML = `Average grade is: ${averageGrade}`
}
