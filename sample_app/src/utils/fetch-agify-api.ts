export const fetchAgifyApi = async (name: string) => {
  const response = await fetch(
    `https://api.agify.io?name=${name}&country_id=FR`
  );
  return await response.json();
};
