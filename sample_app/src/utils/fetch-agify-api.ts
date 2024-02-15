export const fetchAgifyApi = async <T>(name): Promise<T> => {
  const response = await fetch(
    `https://api.agify.io?name=${name}&country_id=FR`
  );
  return await response.json();
};
