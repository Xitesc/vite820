import Experience from "../Experience";
import About from "../About";
const RightSection = () => {
    return (
            <div>
                <div className="text-left grid gap-4 px-4">
                   <About />
                   <Experience />
                   <div className='text-left flex mb-96'>Project</div>
                   <div className='text-left flex  mb-96'>Project</div>
                  <div className='text-left flex  mb-96'>Project</div>

                </div>
            </div>
    )
}

export default RightSection;