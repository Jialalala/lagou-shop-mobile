import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/styles/base.css'

// import Vant from 'vant'
// import 'vant/lib/index.css'

import { 
  Button,
  Field,
  Form,
  CellGroup,
  NavBar,
  Popup,
  Cascader,
  Switch,
  Checkbox,
  Stepper,
  Empty,
  Cell,
  PullRefresh,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NoticeBar,
  List,
  Icon,
  Card,
  AddressList,
  SubmitBar,
  ActionSheet,
  RadioGroup,
  Radio,
  Tab,
  Image,
  Tabs,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Rate,
  Tabbar,
  TabbarItem
} from 'vant'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(Vant)
app
  .use(Button)
  .use(Field)
  .use(Form)
  .use(CellGroup)
  .use(NavBar)
  .use(Popup)
  .use(Cascader)
  .use(Switch)
  .use(Checkbox)
  .use(Stepper)
  .use(Empty)
  .use(Cell)
  .use(PullRefresh)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(NoticeBar)
  .use(List)
  .use(Icon)
  .use(Card)
  .use(AddressList)
  .use(SubmitBar)
  .use(ActionSheet)
  .use(RadioGroup)
  .use(Radio)
  .use(Tab)
  .use(Image)
  .use(Tabs)
  .use(ActionBar)
  .use(ActionBarIcon)
  .use(ActionBarButton)
  .use(Rate)
  .use(Tabbar)
  .use(TabbarItem)
app.mount('#app')

