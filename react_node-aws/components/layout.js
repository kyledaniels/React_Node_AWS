import Head from 'next/head'
import Link from 'next/link'

const Layout = ({children})=>{

    const head =()=>(
        <link 
        
        rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
        crossorigin="anonymous"
        />
    );

        const nav = ()=>(
    <ul className="nav nav-tabs bg-warning">

        <li className="nav-item">
        <Link href="/">
        <a className="nav-link text-dark">Home</a>
        </Link>
        </li>

        <li className="nav-item">
        <Link href="/login">
        <a className="nav-link text-dark">Login</a>
        </Link> 
        </li>

        <li className="nav-item">
        <Link href="/register">
        <a className="nav-link text-dark">Register</a>
        </Link>
        </li>
    </ul>
    );
      
return (

<React.Fragment>
  {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
</React.Fragment>

    );  
};

export default Layout;