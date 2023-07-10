import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

type FormData = {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}
;


const schema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório').min(3, 'O nome deve ter no mínimo 3 caracteres'),
  cpf: yup.string().required('O campo CPF é obrigatório').length(11, 'O CPF deve ter exatamente 11 dígitos'),
  phone: yup.string().required('O campo telefone é obrigatório').length(11, 'O telefone deve ter exatamente 11 dígitos'),
  email: yup.string().required('O campo email é obrigatório').email('Digite um email válido'),
  });

export function Register() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const [users, setUsers] = useState<FormData[]>([]);

  const onSubmit = (data: FormData) => {
    alert('Formulário enviado com sucesso!');
    reset();

    const updatedUsers = [...users, data];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    console.log('Dados salvos no localStorage:', updatedUsers);
  };
        const isFormValid = Object.keys(errors).length === 0;

    

    return (
        <div className='flex flex-1 flex-col w-full justify-center items-center'>
        <h1 className="text-4xl font-bold mb-4 text-center">Cadastro de usuários</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-10'>
            <label className="dark:text-[#efeeed] text-[#515151] focus:text-[#333333] block font-medium mb-4" htmlFor="name">Nome completo</label>
            <div>
            <input placeholder='Digite seu nome' type="text" id='name'   
            {...register('name')} 
            className={`${errors.name ? 'w-60 border-b border-red-500 outline-none focus:border-b-3' : 
            'w-60 border-b border-[#efeeed] outline-none focus:border-b-3 text-[#000]'}`}/>
            </div>
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>

          <div className='mt-4'>
          <label className="dark:text-[#efeeed] text-[#515151] focus:text-[#333333] block font-medium mb-4" htmlFor="email"> E-mail</label>
            <div>

            <input placeholder='Digite seu E-mail' type="text" id='email' {...register('email')} 
            className={`${errors.email ? 'w-60 border-b border-red-500 outline-none focus:border-b-3' : 
            'w-60 border-b border-[#efeeed] outline-none focus:border-b-3'}`}
            />
            </div>
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          <div className='mt-4'>

          <label className="dark:text-[#efeeed] text-[#515151] focus:text-[#333333] block font-medium mb-4" htmlFor="cpf">CPF</label>
            <div>
            <input placeholder='Digite seu CPF' type="text" id='cpf'  {...register('cpf')} 
             className={`${errors.cpf ? 'w-60 border-b border-red-500 outline-none focus:border-b-3' : 
             'w-60 border-b border-[#efeeed] outline-none focus:border-b-3'}`}/>
             </div>
             {errors.cpf && <span className="text-red-500">{errors.cpf.message}</span>}
          </div>

          <div className='mt-4'>
          <label className="dark:text-[#efeeed] text-[#515151] focus:text-[#333333] block font-medium mb-4" htmlFor="phone">Telefone</label>
          <div>

            <input placeholder='Digite seu nome telefone' type="text" id='phone'  {...register('phone')}
             className={`${errors.phone ? 'w-60 border-b border-red-500 outline-none focus:border-b-3' : 
             'w-60 border-b border-[#efeeed] outline-none focus:border-b-3'}`}/>
             </div>
             {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
          </div>

          <button type='submit' disabled={!isFormValid} className={`w-60 h-10 rounded-full text-[#ffffff] font-bold bg-[#00c8b3] mt-10 hover:opacity-70 ease-in-out duration-300 ${
          !isFormValid ? 'w-60 h-10 rounded-full text-[#dddcdc] font-bold bg-[#f6f6f6] cursor-not-allowed mt-10 hover:opacity-70 ease-in-out duration-300' : ''
        }`} >Cadastrar</button>
        </form>
      </div>
    )
}