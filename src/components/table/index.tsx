import {  Edit, Trash2 } from "lucide-react";

export  function Table() { 

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border-separate border-spacing-y-2 mt-6 bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="px-6 py-3 text-left rounded-tl-lg">ID</th>
            <th className="px-6 py-3 text-left">ClientID</th>
            <th className="px-6 py-3 text-left">Nome</th>
            <th className="px-6 py-3 text-left">Produto</th>
            <th className="px-6 py-3 text-left">Data de criação</th>
            <th className="px-6 py-3 text-left rounded-tr-lg">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 transition">
            <td className="px-6 py-4 text-gray-800 font-medium rounded-l-lg">1</td>
            <td className="px-6 py-4 text-gray-800">1</td>
            <td className="px-6 py-4 text-gray-800">João Jorge</td>
            <td className="px-6 py-4 text-gray-800">Telefone</td>
            <td className="px-6 py-4 text-gray-800">25/04/2025</td>
            <td className="px-6 py-4 text-gray-800 rounded-r-lg flex gap-2"><Edit/><Trash2/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
 }