import Header from '../Header'
import Navbar from '../NavBar'  
import Contect from '../Contect'

const LeftSections = () => {
    return (
        <div>
             <div>
                  <div className='sticky top-0 grid gap-4 lg:grid-rows-[35%_40%_25%] lg:h-[90vh]'>
                     <Header />
                     <Navbar />
                     <Contect />
                  </div>
            </div>
        </div>
    )
}
export default LeftSections;