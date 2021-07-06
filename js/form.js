const form = document.getElementById("form-search");
const input = document.getElementById("input-search");

const formClient = (data) => {
  form.addEventListener("keyup", (event) => {
    event.preventDefault();
    const letterClient = input.value.toLowerCase();

    const arrayFilter = data.filter((flag) => {
      const letterAPI = flag.name.toLowerCase();
      if (letterAPI.indexOf(letterClient) !== -1) return flag;
    });
    flags(arrayFilter);
  });
};
