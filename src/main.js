// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import FullWidthLayout from '~/layouts/FullWidth.vue'
import SplitLayout from '~/layouts/HorizontalSplit.vue'
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
  Vue.component('FullWidth', FullWidthLayout)
  Vue.component('Split', SplitLayout)
  Vue.component('Grid', Grid)
  Vue.component('Header', Header)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
