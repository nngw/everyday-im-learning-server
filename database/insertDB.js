import {Users, Tasks} from './schemas';

const user = await Users.create({
    username: 'Nicole',
    password: 'password'
})
const task = await Tasks.create({
    task: 'Really important task',
    time: 25
})
