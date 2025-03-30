import { useEffect, useState } from "react"
import { clasesBento } from "./assets/clasesBento"

function App() {
  const [images, setImages] = useState([])
  const [init, setInit] = useState(() => Math.floor(Math.random() * 100) + 1)
  const limit = 10

  useEffect(() => {
    const fetcImages = async () => {
      const response = await fetch(`https://picsum.photos/v2/list?page=${init}&limit=${limit}`)
      const data = await response.json()
      setImages(data)
      setInit(init + limit)
    }
    fetcImages()
  }, [])

  return (
    <>
      <div className="flex min-h-screen">
        <nav className="flex flex-col w-32 items-center justify-between overflow-auto fixed h-screen p-2">
          <ul className="space-y-2">
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  id="Layer_1"
                  width="800"
                  height="800"
                  version="1.1"
                  viewBox="0 0 511.998 511.998"
                  className="size-[32px]"
                >
                  <path
                    fill="#D7143A"
                    d="M405.017 52.467C369.774 18.634 321.001 0 267.684 0 186.24 0 136.148 33.385 108.468 61.39c-34.114 34.513-53.675 80.34-53.675 125.732 0 56.993 23.839 100.737 63.76 117.011 2.68 1.098 5.377 1.651 8.021 1.651 8.422 0 15.095-5.511 17.407-14.35 1.348-5.071 4.47-17.582 5.828-23.013 2.906-10.725.558-15.884-5.78-23.353-11.546-13.662-16.923-29.817-16.923-50.842 0-62.451 46.502-128.823 132.689-128.823 68.386 0 110.866 38.868 110.866 101.434 0 39.482-8.504 76.046-23.951 102.961-10.734 18.702-29.609 40.995-58.585 40.995-12.53 0-23.786-5.147-30.888-14.121-6.709-8.483-8.921-19.441-6.222-30.862 3.048-12.904 7.205-26.364 11.228-39.376 7.337-23.766 14.273-46.213 14.273-64.122 0-30.632-18.832-51.215-46.857-51.215-35.616 0-63.519 36.174-63.519 82.354 0 22.648 6.019 39.588 8.744 46.092-4.487 19.01-31.153 132.03-36.211 153.342-2.925 12.441-20.543 110.705 8.618 118.54 32.764 8.803 62.051-86.899 65.032-97.713 2.416-8.795 10.869-42.052 16.049-62.495 15.817 15.235 41.284 25.535 66.064 25.535 46.715 0 88.727-21.022 118.298-59.189 28.679-37.02 44.474-88.618 44.474-145.282-.002-44.298-19.026-87.97-52.191-119.814"
                  ></path>
                </svg>
              </a>
            </li>
            <li>Home</li>
            <li>Explorar</li>
            <li>Crear</li>
            <li>Actualizaciones</li>
            <li>Mensajes</li>
          </ul>
            <a className="">Más opciones</a>
        </nav>
        <main className="flex-1 p-4 ml-32">
          <article className="mb-4">
            <section className="flex justify-between items-center">
              <input type="text" placeholder="Buscar" className="w-full h-[48px] p-4 mr-4 bg-gray-200 rounded-md" />
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[32px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
            </section>
          </article>
          <article>
            <section>
              <div className="grid grid-cols-5 grid-rows-5 gap-4 h-screen w-full">
                  { images.map((image, index) => {
                    console.log(image)
                    return (
                      <div className={clasesBento[index]}>
                        <img className="object-fill w-full h-full" src={image.download_url} alt={image.author} id={image.id} />
                      </div>
                    )
                  }) }
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  )
}

export default App
