
const book = {
  Kiev: ["Prague"],
  Prague: ["Zurich", "Kiev"],
  Zurich: ["Amsterdam"],
  Amsterdam: ["Barcelona"],
  Barcelona: ["Berlin"],
  Berlin: ["Kiev", "Amsterdam"],
  Paris: ["Skopje"],
  Skopje: ["Paris"],
};

function dfs(city, visited, path) {
  visited.add(city);  
  path.push(city);    

  
  if (city === "Amsterdam") {
    return true;
  }

  for (const neighbor of book[city]) {
    if (!visited.has(neighbor)) {
      if (dfs(neighbor, visited, path)) {
        return true;
      }
    }
  }

  path.pop();         
  return false;
}

const visited = new Set();
const path = [];
dfs("Kiev", visited, path);

console.log(`The kid traveled through these cities: ${path.join(", ")}`);