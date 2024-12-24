import TodoList from "@/components/TodoList";

console.log("This should not run on the browser")
console.log(process.argv)

import db from '@/utils/db'

const getData = async () => {
    const todos = await db.todo .findMany({})
    return todos
}

const TodosPage = async() => {
    const todos = await getData()
    return (
        <div>
            <TodoList todos={todos} />
        </div>
    )
}

export default TodosPage;