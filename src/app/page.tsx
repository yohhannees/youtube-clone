import Sidebar from "./componenet/sidebar";
import Header from "./componenet/header";
export default function Home() {
  return (
   <main>
      <div>
      <Header notification={0} onInputChange={function (value: string): void {
          throw new Error("Function not implemented.");
        } } onSearchSubmit={function (): void {
          throw new Error("Function not implemented.");
        } }/>
        <div className='grid grid-cols-7 mt-20'>
          <Sidebar />
          {/* <Body  />  */}
        </div>     
      </div>
    </main>
  )
}
