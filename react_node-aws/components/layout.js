import Head from 'next/head'

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
<ul className="nav">
    <li className="nav-item">
        <a className="nav-link" href="">Home</a>
    </li>

    <li className="nav-item">
        <a className="nav-link" href="">Login</a>
    </li>

    <li className="nav-item">
        <a className="nav-link" href="">Register</a>
    </li>
</ul>
    );
      
return (

<React.Fragment>
  {head()} {nav()} {children}
</React.Fragment>

    );  
};

export default Layout;