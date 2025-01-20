// async function getMyData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(response);
//   const json = await response.json();
//   console.log(json);
// }
// getMyData();

async function getMyRepo() {
  const response = await fetch(
    "https://api.github.com/repos/wingchichan/week1_project_build_website"
  );
  console.log(response);
  const json = await response.json();
  console.log(json);

  console.log(json.stargazers_count);
}
getMyRepo();
