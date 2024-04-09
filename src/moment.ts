import moment from 'moment'

// source-map-explorer displays moment/locale/* if there are 3 or more locales included
import 'moment/locale/es'
// import 'moment/locale/cs'
import 'moment/locale/fr'
import 'moment/locale/de'

moment.updateLocale('es', {
  weekdaysShort: [
    '🧡 Dom.',
    '🏓 Lun.',
    '💙 Mar.',
    '🏴 Miér',
    '💤 Jue.',
    '💥 Vie.',
    '💦 Sáb.',
  ],
})

export default moment
