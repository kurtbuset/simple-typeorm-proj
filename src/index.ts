
import { AppDataSource } from "./data-source";
import { Student } from "./entity/Student";
import * as express from 'express'

const app = express()

app.use(express.json())

app.get('/students', async (req, res) => {
    const students = await AppDataSource.manager.find(Student)
    res.json({message: 'list of students', students})
})

app.post('/students', async (req, res) => {
    const student = new Student()
    student.name = req.body.name
    student.level = req.body.level
    student.section = req.body.section

    await AppDataSource.manager.save(student)

    const allStudents = await AppDataSource.manager.find(Student)
    res.json({ message: 'student created', students: allStudents })
})

app.delete('/student/:id', async (req, res) => {
    const studentRepository = AppDataSource.getRepository(Student)
    const removeStudent = await studentRepository.findOneBy({
        id: Number(req.params.id)
    })

    await studentRepository.remove(removeStudent)
    
    const allStudents = await studentRepository.find()
    res.json({ message: 'student has been removed', allStudents})
})

app.put('/student/:id', async (req, res) => {
    res.json('')
})

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(3000, _ => { console.log('listening on port 3000') })

