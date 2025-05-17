import { Edit, Trash2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Produtos() {
  return (
    <div className="ml-20 mt-4">
      <div  className="flex justify-between  mr-6">
        <h1  className="text-2xl  font-bold">Produtos</h1>
       
       <Dialog>
           <DialogTrigger asChild>
             <button  className="bg-gray-900  text-white  px-2 py-2
             rounded cursor-pointer">Adicionar</button>
           </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar</DialogTitle>
            <DialogDescription>
                     <form action="" className="w-full  flex  flex-col gap-2">
                          <input 
                          type="text" 
                          className="border rounded py-2 px-2 
                         text-gray-900 placeholder:text-gray-900" 
                          placeholder="Nome"/>

                           <input 
                          type="number" 
                          className="border rounded py-2 px-2 
                         text-gray-900 placeholder:text-gray-900" 
                          placeholder="Preço"/>

                           <input 
                          type="number" 
                          className="border rounded py-2 px-2 
                         text-gray-900 placeholder:text-gray-900" 
                          placeholder="Quantidade"/>

                          <button className="p-2  bg-gray-900  text-white  font- rounded">Enviar</button>
                     </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      </div>
      <div className="overflow-x-auto p-4">
            <table className="w-full border-separate border-spacing-y-2 mt-6 bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-3 text-left rounded-tl-lg">ID</th>
                  <th className="px-6 py-3 text-left">Nome</th>
                  <th className="px-6 py-3 text-left">Preço</th>
                  <th className="px-6 py-3 text-left">Estoque</th>
                  <th className="px-6 py-3 text-left">Pedidos</th>
                  <th className="px-6 py-3 text-left">Criando em</th>
                  <th className="px-6 py-3 text-left">Actualizado  em  </th>
                  <th className="px-6 py-3 text-left rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 text-gray-800 font-medium rounded-l-lg">1</td>
                  <td className="px-6 py-4 text-gray-800">Iphone 14</td>
                  <td className="px-6 py-4 text-gray-800">200.000,00 kz</td>
                  <td className="px-6 py-4 text-gray-800">2</td>
                  <td className="px-6 py-4 text-gray-800">2</td>
                  <td className="px-6 py-4 text-gray-800">25/04/2025</td>
                  <td className="px-6 py-4 text-gray-800">25/04/2025</td>
                  <td className="px-6 py-4 text-gray-800 rounded-r-lg flex gap-2"><Edit/><Trash2/></td>
                </tr>
              </tbody>
            </table>
         </div>
    </div>
  )
}
