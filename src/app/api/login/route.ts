import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

// export async function GET() {
//   const response = await fetch('https://api.origamid.online/conta/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: 'dog',
//       password: 'dog',
//     }),
//   });

//   if (!response.ok) {
//     return Response.json({ erro: 'Erro na API' });
//   }

//   const data = await response.json();
//   cookies().set('token', data.token, {
//     httpOnly: true,
//     secure: true,
//   });

//   return Response.json(data);
// }

// export async function POST(request: NextRequest) {
//   // cookies
//   const cookies = request.cookies.get('token');

//   // headers
//   const headers = request.headers.get('Cache-Control');

//   // ip
//   const ip = request.headers.get('X-Forwarded-For');

//   // url
//   const url = request.url;

//   // search params
//   const param = request.nextUrl.searchParams.get('busca');

//   // body
//   const body = await request.json();

//   return Response.json({
//     method: 'POST',
//     param: param,
//     body: body,
//     cookies: cookies,
//     headers: headers,
//     ip: ip,
//     url: url,
//   });
// }

// Exercicio

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (!response.ok) {
    return Response.json({
      erro: 'Não foi possível recuperar o token.',
      autenticado: false,
    });
  }

  const data = await response.json();

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
  });

  return Response.json({
    autenticado: true,
  });
}
