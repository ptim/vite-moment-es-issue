import moment from 'moment'

import 'moment/locale/es'

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
