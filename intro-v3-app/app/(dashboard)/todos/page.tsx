import TodoList from "@/components/TodoList";

console.log("This should not run on the browser")
console.log(process.argv)

import db from '@/utils/db'

const getData = async () => {
    // await new Promise((resolve) => setTimeout(() => resolve([]), 2000))
    await new Promise((resolve, reject) => setTimeout(() => reject("Error Demo"), 2000))

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