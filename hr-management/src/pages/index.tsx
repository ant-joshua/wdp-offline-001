import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export type Todo = {
  id: number;
  checked: boolean;
  todo: string;
  deadline: Date;
};

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: 1,
      todo: "Belajar Next.js",
      checked: false,
      deadline: new Date("2023-09-10"),
    },
    {
      id: 2,
      todo: "Belajar Tailwind CSS",
      checked: false,
      deadline: new Date("2023-09-10"),
    },
    {
      id: 3,
      todo: "Belajar Typescript",
      checked: true,
      deadline: new Date("2023-09-13"),
    },
  ]);
  const judul = "Todo List";

  const checkDeadlineMiss = (deadline: Date) => {
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();

    if (diff < 0) {
      return true;
    } else {
      return false;
    }
  };

  const onChangeCheck = (id: number) => {
    const newTodoList = [...todoList];

    const findIndex = newTodoList.findIndex((todo) => todo.id === id);

    newTodoList[findIndex].checked = !newTodoList[findIndex].checked;

    setTodoList(newTodoList);
  };

  const deleteTodo = (id: number) => {
    console.log("todoList", todoList);
    const findIndex = todoList.findIndex((todo) => todo.id === id);
    console.log("findIndex", findIndex);

    todoList.splice(findIndex, 1);

    console.log("splice", todoList);

    const newTodoList = [...todoList];

    setTodoList(newTodoList);
  };

  return (
    <main>
      <section className="px-5 py-5 border-2 border-light m-5 rounded-md">
        <h2 className="text-3xl">{judul}</h2>

        <table className="table-auto">
          <thead>
            <tr>
              <th>No</th>
              <th>Todo</th>
              <th>Deadline</th>
              <th>Check</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td
                  className={`${
                    checkDeadlineMiss(todo.deadline)
                      ? "bg-red-500 text-white"
                      : ""
                  } ${todo.checked ? "line-through" : ""} `}
                >
                  {todo.todo}
                </td>
                <td>{todo.deadline?.toDateString()}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => onChangeCheck(todo.id)}
                  />
                </td>
                <td>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* <ul className="list-disc">
        {todoList.map((todo, index) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul> */}
    </main>
  );
}
