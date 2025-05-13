async function fetchData(url, options = {}) {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || "Erreur lors de la récupération des données"
    );
  }

  return await response.json();
}

export default fetchData;
