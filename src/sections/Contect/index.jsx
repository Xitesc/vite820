import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

const Contect = () => {
  return (
    <div>
       <div className='text-left flex items-end gap-4 text-lg'>
              <FontAwesomeIcon className='hover:scale-125 hover:text-primary-200 transition-all' icon={faGithub} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primary-200 transition-all' icon={faMedium} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primary-200 transition-all' icon={faLinkedin} />
            </div>
    </div>
  );
}
export default Contect;