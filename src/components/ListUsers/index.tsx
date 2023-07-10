import React, { useEffect, useState } from 'react';

interface User {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

export function UsersList()  {
  const [items, setItems] = useState<User[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('users');
    if (storedData) {
      const parsedData = JSON.parse(storedData) as User[];
      setItems(parsedData);
    }
  }, []);

  return (
    <div className='mt-10 flex flex-1 flex-col justify-center '>
      <h2 className='text-lg font-bold text-center'>Lista de usuários</h2>
      {items.length === 0 ? (
        <p className='font-bold text-center'>Nenhum item encontrado.</p>
      ) : (
        <ul className='flex flex-1 flex-col justify-center mt-10'>
          {items.map((item, index) => (
            <li className='text-center mb-10' key={index}>
              <strong>Nome:</strong> {item.name}<br />
              <strong>CPF:</strong> {item.cpf}<br />
              <strong>Telefone:</strong> {item.phone}<br />
              <strong>Email:</strong> {item.email}<br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

