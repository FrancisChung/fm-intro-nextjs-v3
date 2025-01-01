// @ts-ignore
'use client'
import {useTransition} from "react";
import { completeTodo} from "@/utils/actions";

const Todo = ({todo}) => {
    const [isPending, startTransition] = useTransition()
    return (
        <div
            onClick={() => startTransition(()=> completeTodo(todo.id))}
            className = {` border border-white/20 cursor-pointer ${todo.completed ? 'line-through text-white-900' : '' }`}>
            {todo.content}
        </div>
    )
}
// className = {` border border-white/20 cursor-pointer ${todo.completed ? 'line-through text-white-900' : '' }`}
// onClick={() => startTransition(()=> completeTodo(todo.id))} >
export default Todo