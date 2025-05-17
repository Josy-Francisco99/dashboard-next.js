import { ChartOverview } from "@/components/chart";
import { Card, CardHeader, CardTitle , CardDescription, CardContent} from "@/components/ui/card";
import { DollarSign, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14  p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             <Card  >
                  <CardHeader>
                    <div className="flex justify-between align-center gap-2 ">
                         <CardTitle className="flex items-center justify-center">
                            Total vendas
                         </CardTitle>
                         <DollarSign className="ml:auto  h-5 w-5"/>
                   </div>
                         <CardDescription>
                            <p>Total  de vendas em 90 dias</p>
                         </CardDescription>           
                  </CardHeader>

                  <CardContent className="text-base  sm:text-log  font-bold font-bod">
                     <p>R$ 40.000</p>
                  </CardContent>
             </Card>

             <Card  >
                  <CardHeader>
                    <div className="flex justify-between align-center gap-2">
                         <CardTitle className="flex items-center justify-center">
                            Total vendas
                         </CardTitle>
                         <Users className="ml:auto  h-5 w-5"/>
                   </div>
                         <CardDescription>
                            <p>Novos CLientes de 30</p>
                         </CardDescription>           
                  </CardHeader>

                  <CardContent className="text-base  sm:text-log  font-bold font-bod">
                     <p>R$ 234.000,00</p>
                  </CardContent>
             </Card>

             <Card  >
                  <CardHeader>
                    <div className="flex justify-between align-center gap-2">
                         <CardTitle className="flex items-center justify-center">
                            Total vendas
                         </CardTitle>
                         <Users className="ml:auto  h-5 w-5"/>
                   </div>
                         <CardDescription>
                            <p>Novos CLientes de 30</p>
                         </CardDescription>           
                  </CardHeader>

                  <CardContent className="text-base  sm:text-log  font-bold font-bod">
                     <p>R$ 234.000,00</p>
                  </CardContent>
             </Card>

              <Card  >
                  <CardHeader>
                    <div className="flex justify-between align-center gap-2">
                         <CardTitle className="flex items-center justify-center">
                            Total vendas
                         </CardTitle>
                         <Users className="ml:auto  h-5 w-5"/>
                   </div>
                         <CardDescription>
                            <p>Novos CLientes de 30</p>
                         </CardDescription>           
                  </CardHeader>

                  <CardContent className="text-base  sm:text-log  font-bold font-bod">
                     <p>R$ 234.000,00</p>
                  </CardContent>
             </Card>
      </section>
       <section  className="mt-4  flex flex-col md:flex-row gap-4">
            <ChartOverview/>
       </section>
    </main>
  );
}
