export const fetchAgifyApi = async (name) => {
  const response = await fetch(`https://api.agify.io?name=${name}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  return console.error("something wen wrong");
};
