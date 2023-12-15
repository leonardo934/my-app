import { Container } from "@/components/generic/Container";
import { Button } from "@/components/login/Button";
import Image from "next/image";

export default function Build() {


  const runas = [
    {
      name: "Gume do Infinito",
      img: "/img/precision.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/domination.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/sorcery.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/inspiration.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/resolve.webp"
    }
  ]


  const pgRunas = [
    {
      name: "Gume do Infinito",
      img: "/img/precision.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/domination.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/sorcery.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/inspiration.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/resolve.webp"
    }
  ]


  const feiticos = [
    {
      name: "Flash",
      img: "/img/flash.png"
    },
    {
      name: "Smite",
      img: "/img/smite.png"
    }
  ]

  const itens = [
    {
      name: "Gume do Infinito",
      img: "/img/Gume_do_Infinito.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/Gume_do_Infinito.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/Gume_do_Infinito.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/Gume_do_Infinito.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/Gume_do_Infinito.webp"
    },
    {
      name: "Gume do Infinito",
      img: "/img/Gume_do_Infinito.webp"
    }
  ]

  return (
    <>
      <div className="flex gap-2 justify-end mt-2 mr-2">

        <Button text="Salvar" color="bg-green-600" />

      </div>

      <Container>


        <div className="flex gap-2 flex-row w-full h-full bg-sky-800 shadow-indigo-500/40 ">
          <div className=" flex-1 ">

            <div class="w-full h-full rounded-lg shadow bg-sky-800 ">
              <div class="px-5 pb-9">

                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Feitiços de Invocador</h5>

                <div className="flex flex-row gap-2 ">
                  {feiticos.map((feitico) => {
                    return (
                      <div>
                        <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                          {feitico.name}
                          <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <Image src={feitico.img} width={50} height={50} className="w-16 mr-5  h-16 mb-3 rounded-full shadow-lg" />
                      </div>
                    )
                  })}

                </div>

                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Itens iniciais</h5>

                <div className="flex flex-row gap-2 ">
                  {itens.map((item) => {
                    return (
                      <div>
                        <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                          {item.name}
                          <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <Image src={item.img} width={50} height={50} className="w-16 mr-5  h-16 mb-3 rounded-full shadow-lg" />
                      </div>
                    )
                  })}

                </div>

                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Itens</h5>

                <div className="flex flex-row gap-2 ">
                  {itens.map((item) => {
                    return (
                      <div>
                        <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                          {item.name}
                          <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <Image src={item.img} width={50} height={50} className="w-16 mr-5  h-16 mb-3 rounded-full shadow-lg" />
                      </div>
                    )
                  })}

                </div>

                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Itens Situacionais</h5>

                <div className="flex flex-row gap-2 ">
                  {itens.map((item) => {
                    return (
                      <div>
                        <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                          {item.name}
                          <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <Image src={item.img} width={50} height={50} className="w-16 mr-5  h-16 mb-3 rounded-full shadow-lg" />
                      </div>
                    )
                  })}

                </div>
              </div>
            </div>

          </div>

          <div className="w-full gap-2 h-full rounded-lg shadow bg-sky-800 flex-1 flex-row">

            <div class="px-5 pb-9">

              <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white justify-items-center">Runas</h5>

              <div className="flex flex-row gap-2 ">
                {pgRunas.map((pgRuna) => {
                  return (
                    <div>
                      <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        {pgRuna.name}
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <Image src={pgRuna.img} width={20} height={20} className="mr-14 w-8 mt-0  h-8 -mb-96 rounded-full shadow-lg" />
                    </div>
                  )
                })}

              </div>

            </div>
            
            <div className="flex flex-row gap-2 ">
                {itens.map((item) => {
                  return (
                    <div>
                      <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        {item.name}
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <Image src={item.img} width={50} height={50} className="w-16 mr-5  h-16 mb-3 rounded-full shadow-lg" />
                    </div>
                  )
                })}

              </div>

              <div className="flex flex-row gap-2 ">
                {itens.map((item) => {
                  return (
                    <div>
                      <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        {item.name}
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <Image src={item.img} width={50} height={50} className="w-16 mr-5  h-16 mb-3 rounded-full shadow-lg" />
                    </div>
                  )
                })}

              </div>

              <div className="flex flex-row gap-2 ">
                {itens.map((item) => {
                  return (
                    <div>
                      <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        {item.name}
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <Image src={item.img} width={50} height={50} className="w-16 mr-5  h-16 mb-3 rounded-full shadow-lg" />
                    </div>
                  )
                })}

              </div>
              
          </div>
        </div>



      </Container>
    </>
  );
}
