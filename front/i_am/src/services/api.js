const API_URL = 'http://tag.tn/i_am';

// Get all companies
export const getAllEntreprises = async () => {
  const response = await fetch(`${API_URL}/entreprises`);
  if (!response.ok) {
    throw new Error('Failed to fetch companies');
  }
  return response.json();
};

// Get one company by ID
export const getEntrepriseById = async (id) => {
  const response = await fetch(`${API_URL}/entreprises/${id}`);
  if (!response.ok) {
    throw new Error('Company not found');
  }
  return response.json();
};

// You can add more functions later:
// export const createEntreprise = async (data) => { ... }
// export const updateEntreprise = async (id, data) => { ... }
// export const deleteEntreprise = async (id) => { ... }