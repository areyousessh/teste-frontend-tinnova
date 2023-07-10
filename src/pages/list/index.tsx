
import { Link } from "react-router-dom";
import {UsersList} from "../../components/ListUsers";


export function List() {   

    return (
       <div className="flex flex-1 flex-col">
            <h1 className="text-center text-2xl">Teste Frontend Tinnova</h1>
            <div className="flex flex-1 justify-center mt-4">
                <div className="w-60 h-10 items-center justify-center flex rounded-full text-[#ffffff] font-bold bg-[#00c8b3] mt-5 hover:opacity-70 ease-in-out duration-300">
                    <Link to="/Register">Cadastrar um usuário</Link>
                </div>
            </div>
            <UsersList />
       </div>
    )
}