let tasks: any;

async function addTodoItem(title: string, description: string) {
  // const token = localStorage.getItem("token"); // get token value in local storage
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzAyMjYxMCwiZXhwIjoxNjgzNjI3NDEwfQ.5RspmxdIe1jAfY2vU0vm0zhogJCUaqpGsD4VsZnhGbc";
  await fetch("http://localhost:8010/tasks", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      completed: false,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
  displayTodoList();
}

// Function to mark a to-do item as completed
async function completeTodoItem(id: number) {
  // const token = localStorage.getItem("token"); // get token value in local storage
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzAyMjYxMCwiZXhwIjoxNjgzNjI3NDEwfQ.5RspmxdIe1jAfY2vU0vm0zhogJCUaqpGsD4VsZnhGbc";
  await fetch(`http://localhost:8010/tasks/${id}/complete`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
  displayTodoList();
}

// Function to delete a to-do item
async function deleteTodoItem(id: number) {
  // const token = localStorage.getItem("token"); // get token value in local storage
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzAyMjYxMCwiZXhwIjoxNjgzNjI3NDEwfQ.5RspmxdIe1jAfY2vU0vm0zhogJCUaqpGsD4VsZnhGbc";
  await fetch(`http://localhost:8010/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).catch((error) => console.error(error));
  displayTodoList();
}

async function displayTodoList() {
  try {
    // const token = localStorage.getItem("token"); // get token value in local storage
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzAyMjYxMCwiZXhwIjoxNjgzNjI3NDEwfQ.5RspmxdIe1jAfY2vU0vm0zhogJCUaqpGsD4VsZnhGbc";
    const myHeaders = new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    const response = await fetch("http://localhost:8010/tasks", {
      method: "GET",
      credentials: "include",
      headers: myHeaders,
    });
    tasks = await response.json();
    return tasks;
  } catch (error) {
    console.log(error);
  }
}
export { displayTodoList, addTodoItem };
