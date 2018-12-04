import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Buttons from 'views/Components/Buttons.jsx';
import GridSystem from 'views/Components/GridSystem.jsx';
import Panels from 'views/Components/Panels.jsx';
import SweetAlert from 'views/Components/SweetAlert.jsx';
import Notifications from 'views/Components/Notifications.jsx';
import Icons from 'views/Components/Icons.jsx';
import Typography from 'views/Components/Typography.jsx';
import RegularForms from 'views/Forms/RegularForms.jsx';
import ExtendedForms from 'views/Forms/ExtendedForms.jsx';
import ValidationForms from 'views/Forms/ValidationForms.jsx';
import Wizard from 'views/Forms/Wizard.jsx';
import RegularTables from 'views/Tables/RegularTables.jsx';
import ExtendedTables from 'views/Tables/ExtendedTables.jsx';
import ReactTables from 'views/Tables/ReactTables.jsx';
import GoogleMaps from 'views/Maps/GoogleMaps.jsx';
import FullScreenMap from 'views/Maps/FullScreenMap.jsx';
import VectorMap from 'views/Maps/VectorMap.jsx';
import Charts from 'views/Charts/Charts.jsx';
import Calendar from 'views/Calendar/Calendar.jsx';
import Widgets from 'views/Widgets/Widgets.jsx';
import UserProfile from 'views/Pages/UserProfile.jsx';
import TimelinePage from 'views/Pages/Timeline.jsx';
import RTLSupport from 'views/Pages/RTLSupport.jsx';

import pagesRoutes from './pages.jsx';

// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import Image from '@material-ui/icons/Image';
import Apps from '@material-ui/icons/Apps';
import Face from '@material-ui/icons/Face';
// import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from '@material-ui/icons/GridOn';
import Place from '@material-ui/icons/Place';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Timeline from '@material-ui/icons/Timeline';
import PlayForWork from '@material-ui/icons/PlayForWork';
import Input from '@material-ui/icons/Input';
import Local_shipping from '@material-ui/icons/LocalShipping';
import transfer_within_a_station from '@material-ui/icons/TransferWithinAStation';
import DateRange from '@material-ui/icons/DateRange';
import CardTravel from '@material-ui/icons/CardTravel';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import FlightLand from '@material-ui/icons/FlightLand';
import Performans from '../views/Performans/Performans';
import Takvim from '../views/Takvim/Takvim';
import Brief from '../views/Brief/Brief';
import Teklif from '../views/Teklif/Teklif';
import Proje from '../views/Proje/Proje';
import Pazarlama from '../views/Pazarlama/Pazarlama';
import Musteri from '../views/Musteri/Musteri';
import Tedarikci from '../views/Tedarikci/Tedarikci';
import TedarikciEdit from '../views/Tedarikci/TedarikciEdit';
import Tahsilat from '../views/Tahsilat/Tahsilat';
import TahsilatEdit from '../views/Tahsilat/TahsilatEdit';
import Odeme from '../views/Odeme/Odeme';
import Ayarlar from '../views/Ayarlar/Ayarlar';
import ProjeEdit from '../views/Proje/ProjeEdit';
import TeklifEdit from '../views/Teklif/TeklifEdit.jsx';
import MainMenu from '../views/MainMenu/MainMenu.jsx';
import BriefEdit from '../views/Brief/BriefEdit';
import MusteriEdit from '../views/Musteri/MusteriEdit.jsx';
import PazarlamaEdit from '../views/Pazarlama/PazarlamaEdit.jsx';
var pages = [
  {
    path: '/timeline-page',
    name: 'Timeline Page',
    mini: 'TP',
    component: TimelinePage,
  },
  {
    path: '/user-page',
    name: 'User Profile',
    mini: 'UP',
    component: UserProfile,
  },
  {
    path: '/mainmenu',
    name: 'MainMenu',
    icon: WidgetsIcon,
    component: MainMenu,
  },
  {
    path: '/teklifedit',
    name: 'Teklif Edit',
    icon: Input,
    component: TeklifEdit,
  },
  {
    path: '/musteriedit',
    name: 'Müşteri Edit',
    icon: Input,
    component: MusteriEdit,
  },
  {
    path: '/pazarlamaedit',
    name: 'Pazarlama Edit',
    icon: Input,
    component: PazarlamaEdit,
  },
  {
    path: '/tedarikciedit',
    name: 'Tedarikci Edit',
    icon: Input,
    component: TedarikciEdit,
  },

  {
    path: '/tahsilatedit',
    name: 'Tahsilat Edit',
    icon: Input,
    component: TedarikciEdit,
  },
  {
    path: '/projeedit',
    name: 'Proje Edit',
    icon: Input,
    component: ProjeEdit,
  },
  { path: '/briefedit', name: 'Brief Edit', icon: Input, component: BriefEdit },
  {
    path: '/rtl/rtl-support-page',
    name: 'RTL Support',
    mini: 'RS',
    component: RTLSupport,
  },
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    path: '/performans',
    name: 'Performans',
    icon: Timeline,
    component: Performans,
  },
  { path: '/takvim', name: 'Takvim', icon: DateRange, component: Takvim },
  { path: '/brief', name: 'Brief', icon: PlayForWork, component: Brief },
  {
    path: '/pazarlama',
    name: 'Pazarlama',
    icon: CardTravel,
    component: Pazarlama,
  },
  {
    path: '/teklif',
    name: 'Teklifler',
    icon: transfer_within_a_station,
    component: Teklif,
  },

  { path: '/proje', name: 'Proje', icon: DateRange, component: Proje },
  { path: '/musteri', name: 'Müşteri', icon: Face, component: Musteri },
  {
    path: '/tedarikci',
    name: 'Tedarikçi',
    icon: Local_shipping,
    component: Tedarikci,
  },
  {
    path: '/tahsilat',
    name: 'Tahsilat',
    icon: FlightLand,
    component: Tahsilat,
  },
  { path: '/odeme', name: 'Ödeme', icon: FlightTakeoff, component: Odeme },
  { path: '/Ayarlar', name: 'Ayarlar', icon: DateRange, component: Ayarlar },

  {
    collapse: true,
    path: '-page',
    name: 'Pages',
    state: 'openPages',
    icon: Image,
    views: pages,
  },

  { redirect: true, path: '/', pathTo: '/mainmenu', name: 'MainMenu' },
];
export default dashRoutes;
