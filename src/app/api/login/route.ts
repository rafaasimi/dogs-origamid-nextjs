import { cookies } from "next/headers";

export async function GET() {
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'dog',
      password: 'dog',
    }),
  });

  if (!response.ok) {
    return Response.json({ erro: 'Erro na API' });
  }

  const data = await response.json();
  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
  });

  return Response.json(data);
}
