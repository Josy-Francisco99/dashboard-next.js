export  function Table() { 

  return (
    <div>
        <table className="table-auto border-collapse w-full">
            <thead  className="w-full">
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Sexo</th>
                </tr>
            </thead>
            <tbody  className="w-full">
                <tr>
                    <td>João</td>
                    <td>25</td>
                    <td>Masculino</td>
                </tr>
                <tr>
                    <td>Maria</td>
                    <td>30</td>
                    <td>Feminino</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
 }