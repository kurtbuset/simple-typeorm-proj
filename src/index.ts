import { AppDataSource } from "./data-source"

import { Student } from "./entity/Student"

import express from "express"

AppDataSource.initialize().then(async _ => {
    // ----------------------------------------------------
    // save a student in db using entity manager
    // const student = new Student()
    // student.name = 'kort'
    // student.level = 1
    // student.section = 'kamunggay'

    // await AppDataSource.manager.save(student)
    // console.log(`student has been saved with student id: ${student.id}`)
    // ----------------------------------------------------

    

    // ----------------------------------------------------
    // saving student using a repository 
    // const student = new Student()
    // student.name = 'kort'
    // student.level = 1
    // student.section = 'kapayas'

    // const studentRepository = AppDataSource.getRepository(Student)
    // await studentRepository.save(student)
    // console.log('student has been saved')
    // ----------------------------------------------------



    // ----------------------------------------------------
    // const studentRepository = AppDataSource.getRepository(Student)
    // // use .find method to fetch all students in db using repository of students
    // const allStudents = await studentRepository.find()
    // console.log('All students in db: ', allStudents)

    // // use .findOneBy method to fetch a single student in db using repository of students
    // const firstStudent = await studentRepository.findOneBy({
    //     id: 1
    // })
    // console.log('first student from db: ', firstStudent)

    // const kamunggaySection = await studentRepository.findOneBy({
    //     section: "kamunggay"
    // })
    // console.log('student with section kamunggay: ', kamunggaySection)

    // // fetch all students and number of students in db
    // const [ students, studentCount ] = await studentRepository.findAndCount()
    // console.log('all students: ', students)
    // console.log('students count: ', studentCount)
    // ----------------------------------------------------



    // ----------------------------------------------------
    // updating in database
    // const studentRepository = AppDataSource.getRepository(Student)
    // const updateStudent = await studentRepository.findOneBy({
    //     id: 1
    // })
    // updateStudent.name = 'kort updated'
    // await studentRepository.save(updateStudent)
    // console.log(`Student with id ${updateStudent.id} has been updated: `)

    // const allStudents = await studentRepository.find()
    // console.log(allStudents)
    // ----------------------------------------------------

    const studentRepository = AppDataSource.getRepository(Student)
    const removeStudent = await studentRepository.findOneBy({
        id: 2
    })
    
    await studentRepository.remove(removeStudent)
    console.log('student + ', removeStudent + ' has been removed.')
    console.log(await studentRepository.find())

    // display students in db
    // const studentsInDB = await AppDataSource.manager.find(Student)
    // console.log('All students from the db', studentsInDB)
}).catch(error => console.log(error))





// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "kurt"
//     user.lastName = "buset"
//     user.age = 89

//     // save data to user
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     // get all data from users 
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

// }).catch(error => console.log(error))
