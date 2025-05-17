import { Home, Package, PanelBottom, Settings, ShoppingBag, Users} from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import  Link  from "next/link"
import {TooltipProvider,  Tooltip,  TooltipContent, TooltipTrigger} from  "../ui/tooltip"
 
export  function SideBar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">

      <aside
       className="fixed inset-y-0 left-0  hidden w-14 border-r bg-background sm:flex "
      >

        <nav className="flex  flex-col items-center gap-4 px-2 py-5">
            <TooltipProvider>
              
                    <Link href="#" className="flex  h-9  w-9 
                        shrink-center justify-center items-center bg-primary text-primary-foreground rounded-full ">
                        
                        <Package  className="w-5 h-5"/>
                        <span className="sr-only">Dashbord Avatar</span>
                    </Link>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="/" className="flex  h-9  w-9 
                              shrink-0  items-center justify-center rounded-lg 
                              text-muted-foreground transation-colors hover:text-foreground
                              ">
                              
                              <Home  className="w-5 h-5"/>
                              <span className="sr-only">Início</span>
                          </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Início</TooltipContent >
                </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                        <Link  href="/pedidos" className="flex  h-9  w-9 
                              shrink-0  items-center justify-center rounded-lg 
                              text-muted-foreground transation-colors hover:text-foreground
                              ">
                              
                              <ShoppingBag  className="w-5 h-5"/>
                              <span className="sr-only">Pedidos</span>
                          </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Pedidos</TooltipContent >
                </Tooltip>


                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="/produtos" className="flex  h-9  w-9 
                              shrink-0  items-center justify-center rounded-lg 
                              text-muted-foreground transation-colors hover:text-foreground
                              ">
                              
                              <Package  className="w-5 h-5"/>
                              <span className="sr-only">Produtos</span>
                          </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Produtos</TooltipContent >
                </Tooltip>


                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="/clientes" className="flex  h-9  w-9 
                              shrink-0  items-center justify-center rounded-lg 
                              text-muted-foreground transation-colors hover:text-foreground
                              ">
                              
                              <Users  className="w-5 h-5"/>
                              <span className="sr-only">Clientes</span>
                          </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Clientes</TooltipContent >
                </Tooltip>

                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="/configuracoes" className="flex  h-9  w-9 
                              shrink-0  items-center justify-center rounded-lg 
                              text-muted-foreground transation-colors hover:text-foreground
                              ">
                              
                              <Settings  className="w-5 h-5"/>
                              <span className="sr-only">Configurações</span>
                          </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Configurações</TooltipContent >
                </Tooltip>
                
            </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4  sm:py-4  sm:pl-14">
          <header
          className="sticky  top-0  z-30  flex h-14 items-center px-4 border-b bg-background gap-4 sm:static
          sm:h-auto sm:border-0  sm:bg-transparent sm:px-6
          "
          >
            <Sheet>
              <SheetTrigger asChild>
                     <Button size= "icon"  variant="outline" className="sm:hidden">
                      <PanelBottom  className="w-5 h-5"/>
                      <span className="sr-only">Menu</span>
                      </Button>
              </SheetTrigger>
              <SheetContent  side="left" className="w-1/2 sm:hidden">
                      <nav  className=" flex flex-col gap-4">
                        <Link
                         href="#" 
                         className="flex h-10 w-10 bg-primary  rounded-full text-lg
                          items-center justify-center  text-primary-foreground ">

                        <Package className="w-5  h-5  transition-all"/>
                         <span className="sr-only">logo</span>
                        </Link>
                        

                        <Link
                         href="#" 
                         className="flex item-center  gap-4 px-2.5  text-muted-foreground  hover:text-foreground">

                        <Home className="w-5  h-5  transition-all"/>
                         <span className="">Inicío</span>
                        </Link>

                         <Link
                         href="#" 
                         className="flex item-center  gap-4 px-2.5  text-muted-foreground  hover:text-foreground">

                        <ShoppingBag className="w-5  h-5  transition-all"/>
                         <span className="">Pedidos</span>
                        </Link>

                         <Link
                         href="#" 
                         className="flex item-center  gap-4 px-2.5  text-muted-foreground  hover:text-foreground">

                        <Package className="w-5  h-5  transition-all"/>
                         <span className="">Produtos</span>
                        </Link>

                        <Link
                         href="#" 
                         className="flex item-center  gap-4 px-2.5  text-muted-foreground  hover:text-foreground"
                         >

                        <Settings className="w-5  h-5  transition-all"/>
                         <span className="">Configurações</span>
                        </Link>
                      </nav>
              </SheetContent>
            </Sheet>
             <h2>Menu</h2> 
          </header>
      </div>
    </div>
  )
}