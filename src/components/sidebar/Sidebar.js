import logo from './assets/iconcobpagas.svg';
import './Sidebar.css';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
  
  
  <div className={sidebarOpen && "sidebar-responsive"} id="sidebar">
    <div className="sidebar__tutle">
      <div className="sidebar__img">
        <img src={logo} alt= "logo"/>
          <h1>JFSoluções</h1>
      </div>
      <i 
      onClick={()=> closeSidebar()}
      className="fa fa-times"
      id="sidebarIcon"
      aria-hidden="true"
      ></i>
    </div>
    <div className="sidebar__menu">
      <div className="sidebar__link active_menu_link">
        <i className="fa fa-minus-square"></i>
        <a href="#/">Home</a>
      </div>
      <h2>ADMIN</h2>
      <div className="sidebar__link">
        <i className="fa fa-minus-square"></i>
        <a href="#/">Área administrativa</a>
      </div>
      <div className="sidebar__link">
        <i className="fa fa-building"></i>
        <a href="#/">Lojas</a>
      </div>
      <div className="sidebar__link">
        <i className="fa fa-archive"></i>
        <a href="#/">Produtos</a>
      </div>
      <div className="sidebar__link">
        <i className="fa fa-bars"></i>
        <a href="#/">Categorias</a>
      </div>
      <div className="sidebar__link">
        <i className="fa fa-cutlery"></i>
        <a href="#/">Pedidos</a>
      </div>
      <h2>Pessoas</h2>
      <div className="sidebar__link">
        <i className="fa fa-male"></i>
        <a href="#/">Administradores</a>
      </div>
      <div className="sidebar__link">
        <i className="fa fa-user-circle"></i>
        <a href="#/">Usuários</a>
      </div>
      <div className="sidebar__link">
        <i className="fa fa-money"></i>
        <a href="#/">Pagamentos e custos</a>
      </div>
      <div className="sidebar__link">
        <i className="fa fa-task"></i>
        <a href="#/">A Plataforma</a>
      </div>
      <div className="sidebar__link">
        <i className="fa fa-file-text"></i>
        <a href="#/">Política de privacidade</a>
      </div>
      <div className="sidebar__logout">
        <i className="fa fa-power-off"></i>
        <a href="#/">Logout</a>
      </div>
    </div>
  </div>

}
export default Sidebar;