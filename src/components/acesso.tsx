import fs from 'fs/promises';

export default async function Acesso() {
  await fs.appendFile('acesso.tsx', `${Date.now()} `, 'utf8');
  const data = await fs.readFile('acesso.tsx', 'utf8');

  return (
    <div>
      {data}
    </div>
  )
}