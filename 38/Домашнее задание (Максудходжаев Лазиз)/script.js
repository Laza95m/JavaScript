const container = document.querySelector(".container");

// Функция создания элемента "div", с именами пользователя
const createElement = (name) => {
  const div = document.createElement("div");
  div.classList.add("user_name");
  div.textContent = name;
  container.append(div);
};

const getUsersName = async () => {
  try {
    //Получаем данные пользователя с сервера
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Добавляем все имена в функцию "createElement"
    await users.forEach((user) => {
      createElement(user.name);
    });

    // При нажатии на элемент "div" с именами, появляется таблица данных
    container.addEventListener("click", (e) => {
      //игнорируем клики вне елемента
      if (e.target.className === "container") return;
      const table = document.querySelector("table");

      users.find((user) => {
        if (e.target.textContent === user.name) {
          const address = `${user?.address?.city}, ${user?.address?.street}`;
          const { name, username, email, phone, website } = user;
          const userData = { name, username, address, email, phone, website };
          let result = "";

          for (const [key, value] of Object.entries(userData)) {
            result += `
            <tr>
              <td>${key}</td>
              <td>${value}</td>
            </tr>`;
          }

          table.innerHTML = result;
        }
      });
    });

    return users;
  } catch (error) {
    throw new Error(`Ошибка в функции "getUsersName" - ${error}`);
  }
};

getUsersName();
