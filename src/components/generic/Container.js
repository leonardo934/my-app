

export function Container({ children }) {
  return (
    <div className="container my-10 mx-auto  min-h-100vh">
      <div className="flex flex-wrap gap-2  justify-center ">{children}</div>
    </div>
  )
}
