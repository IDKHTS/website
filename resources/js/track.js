import gtmPush from './gtm'
export default function() {
  if (!window) return
  window.addEventListener('klaviyoForms', function(data) {
    if (!data || data.detail.type !== 'submit') return
    gtmPush({
      event: 'general-event',
      eventData: {
        eventCategory: 'subscribe',
        eventAction: 'return-success',
        eventLabel: data.detail.formId,
        eventMetaData: JSON.stringify(data.detail.metaData)
      }
    })
  })
}
