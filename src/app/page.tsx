import Sidebar from "./componenet/sidebar";
import Header from "./componenet/header";
export default function Home() {
  return (
   <main>
      <div>
        {/* <Header /> */}
        <div className='grid grid-cols-7 mt-20'>
          <Sidebar />
          {/* <Body  />  */}
        </div>     
      </div>
    </main>
  )
}
