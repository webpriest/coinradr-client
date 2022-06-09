import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import OpenLayout from '../OpenLayout'
import LeadLayout from '../LeadLayout'
import Home from '../views/Home.vue'
import News from '../views/news/News.vue'
import Insight from '../views/insight/Insight.vue'
import Education from '../views/education/Education.vue'
import EducationSingle from '../views/education/EducationSingle.vue'
import Profile from '../views/user/Profile.vue'
import Portfolio from '../views/portfolios/Portfolio.vue'
import Index from '../views/lead/Index.vue'
import NewsIndex from '../views/lead/news/NewsIndex.vue'
import NewsCreate from '../views/lead/news/NewsCreate.vue'
import NewsShow from '../views/lead/news/NewsShow.vue'
import NewsEdit from '../views/lead/news/NewsEdit.vue'
import CategoryIndex from '../views/lead/category/CategoryIndex.vue'
import CategoryCreate from '../views/lead/category/CategoryCreate.vue'
import CategoryShow from '../views/lead/category/CategoryShow.vue'
import CategoryEdit from '../views/lead/category/CategoryEdit.vue'
import EducationIndex from '../views/lead/education/EducationIndex.vue'
import EducationCreate from '../views/lead/education/EducationCreate.vue'
import EducationShow from '../views/lead/education/EducationShow.vue'
import EducationEdit from '../views/lead/education/EducationEdit.vue'
import InsightIndex from '../views/lead/insight/InsightIndex.vue'
import InsightCreate from '../views/lead/insight/InsightCreate.vue'
import InsightShow from '../views/lead/insight/InsightShow.vue'
import InsightEdit from '../views/lead/insight/InsightEdit.vue'
import SignalIndex from '../views/lead/signal/SignalIndex.vue'
import SignalCreate from '../views/lead/signal/SignalCreate.vue'
import SignalShow from '../views/lead/signal/SignalShow.vue'
import SignalEdit from '../views/lead/signal/SignalEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: OpenLayout
    }
  },
  {
    path: '/insight',
    name: 'insight.featured',
    component: Insight,
    meta: {
      layout: OpenLayout
    }
  },
  {
    path: '/education',
    name: 'education.all',
    component: Education,
    meta: {
      layout: OpenLayout
    }
  },
  {
    path: '/education/:slug',
    name: 'education.single',
    component: EducationSingle,
    meta: {
      layout: OpenLayout
    }
  },
  {
    path: '/user/profile',
    name: 'user.profile',
    component: Profile,
    meta: {
      layout: OpenLayout
    }
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    meta: {
      layout: OpenLayout
    }
  },
  {
    path: '/portfolio/:id',
    name: 'portfolio.show',
    component: Portfolio,
    props: true,
    meta: {
      layout: OpenLayout
    }
  },
  // ADMIN SECTION
  {
    path: '/lead/dashboard',
    name: 'lead.index',
    component: Index,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/insight/index',
    name: 'insight.index',
    component: InsightIndex,
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/news/index',
    name: 'news.index',
    component: NewsIndex,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/news/show/:slug',
    name: 'news.show',
    component: NewsShow,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/news/:slug/edit',
    name: 'news.edit',
    component: NewsEdit,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/news/create',
    name: 'news.create',
    component: NewsCreate,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/category/index',
    name: 'category.index',
    component: CategoryIndex,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/category/show/:slug',
    name: 'category.show',
    component: CategoryShow,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/category/:slug/edit',
    name: 'category.edit',
    component: CategoryEdit,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/category/create',
    name: 'category.create',
    component: CategoryCreate,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/education/index',
    name: 'education.index',
    component: EducationIndex,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/education/show/:slug',
    name: 'education.show',
    component: EducationShow,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/education/:slug/edit',
    name: 'education.edit',
    component: EducationEdit,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/education/create',
    name: 'education.create',
    component: EducationCreate,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/insight/index',
    name: 'insight.index',
    component: InsightIndex,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/insight/show/:token',
    name: 'insight.show',
    component: InsightShow,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/insight/:token/edit',
    name: 'insight.edit',
    component: InsightEdit,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/insight/create',
    name: 'insight.create',
    component: InsightCreate,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/signal/index',
    name: 'signal.index',
    component: SignalIndex,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/signal/show/:id',
    name: 'signal.show',
    component: SignalShow,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/signal/:id/edit',
    name: 'signal.edit',
    component: SignalEdit,
    props: true,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  },
  {
    path: '/signal/create',
    name: 'signal.create',
    component: SignalCreate,
    beforeEnter: (to, from, next) => {
      if(!store.getters.authenticated || store.getters.stint !== 'lead') {
        return next({ name: 'home' })
      }
      return next()
    },
    meta: {
      layout: LeadLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
