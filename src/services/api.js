const API_URL = 'https://projeto-individual-aos.vercel.app/api';
export const PROFILE_ID = 8;

export async function getProfile(profileId = PROFILE_ID) {
  const response = await fetch(`${API_URL}/pessoas/${profileId}`, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`A API respondeu com o status ${response.status}.`);
  }

  const profile = await response.json();
  if (profile.id !== profileId) {
    throw new Error('A API retornou um perfil diferente do esperado.');
  }

  return profile;
}
