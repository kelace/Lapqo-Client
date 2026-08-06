import { Link } from 'react-router-dom';
import { Logo } from '@/shared/ui/logo/logo';

export function Header(){
    return(
        <header className="bg-muted p-4 max-md:hidden">
            <div className='flex w-full mx-auto justify-between items-center'>
                <div>
                <Link to="/" >
                    <Logo/>
                </Link>
                </div>
                <div>
                    <nav>
                        <ul className='flex'>
                            <li className='px-3'>
                                <Link to="/about-us" target="_blank">
                                    About us
                                </Link>
                            </li>
                            <li className='px-3'>
                                <Link to="https://github.com/kelace/Lapqo-Client" target="_blank">
                                    Contribute
                                </Link>
                            </li>
                            <li className='px-3'>
                                Logout
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}