import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:3001/api"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    )
    return todos
  } catch (error) {
    console.log('error',error)
    throw new Error('SOMETHING WENT WRONG ON GET TODOS API')
  }
}

export const addTodo = async (
    formData: ITodo
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const todo: Omit<ITodo, "_id"> = {
        name: formData.name,
        description: formData.description,
        status: false,
      }
      const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + "/todos/add-todo",
        todo
      )
      return saveTodo
    } catch (error) {
        console.log('error',error)
    throw new Error('SOMETHING WENT WRONG ON ADD TODOS API')
    }
  }
  

  export const updateTodo = async (
    todo: ITodo
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const todoUpdate: Pick<ITodo, "status"> = {
        status: true,
      }
      const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
        `${baseUrl}/todos/edit-todo/${todo._id}`,
        todoUpdate
      )
      return updatedTodo
    } catch (error) {
        console.log('error',error)
    throw new Error('SOMETHING WENT WRONG ON UPDATE TODOS API')
    }
  }

  export const deleteTodo = async (
    _id: string
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
        `${baseUrl}/todos/delete-todo/${_id}`
      )
      return deletedTodo
    } catch (error) {
        console.log('error',error)
    throw new Error('SOMETHING WENT WRONG ON DELETE TODOS API')
    }
  }