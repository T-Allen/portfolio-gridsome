require('typeface-josefin-sans')
require('typeface-raleway')
require('feather-icons')

import DefaultLayout from '~/layouts/Default.vue'
import LayoutSection from '~/layouts/LayoutSection.vue'
import LayoutDetail from '~/layouts/LayoutDetail.vue'
import Grid from '~/layouts/Grid.vue'
import Header from '~/components/Header.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub, faEnvelope)


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('ProjectOverview', LayoutSection)
  Vue.component('ProjectDetail', LayoutDetail)
  Vue.component('Grid', Grid)
  Vue.component('Header', Header)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
