import './styles.css';

function Sidebar(prop) {
  const sidemenu = ["Kontak", "Alamat"];

  const sidenav = () => {
    return sidemenu.map((item, idx) => {
      return <button onClick={() => prop.onClick(idx + 1)} >{item}</button>
    })
  }
  return(
    <div>
      <header className='sidebar-wrapper'>
      <nav className='side-navigation'>{sidenav()}</nav>
      </header>
    </div>
  );
}

export default Sidebar;