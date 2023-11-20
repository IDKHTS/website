
export default function loadKlaviyo() {
  const script = document.createElement('script')
  script.setAttribute('id', 'load-klaviyo')
  script.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XNyFXA'
  document.body.appendChild(script)
}
