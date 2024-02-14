export const fetchAgifyApi = async (name) => {
  const response = await fetch(
    `https://api.agify.io?name=${name}&country_id=FR`
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  return console.error("something wen wrong");
};
