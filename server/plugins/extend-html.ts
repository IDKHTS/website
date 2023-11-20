export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // will slowdown speed, load those after app.vue component mounted
    // GTM
    html.body.push(`
        <noscript defer><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W5ZH3RF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      `)

    // // Zendesk
    // html.body.push(`
    //     <script>
    //         // https://support.zendesk.com/hc/en-us/articles/229167008-Advanced-customization-of-your-Web-Widget
    //         // https://chat.zendesk.com/hc/en-us/articles/212017088-Hiding-the-widget-on-mobile-devices-via-API
    //         var ua = navigator.userAgent.toLowerCase(),
    //         platform = navigator.platform.toLowerCase()
    //         ;(platformName = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0]), (isMobile = /ios|android|webos/.test(platformName))

    //         if (!isMobile) {
    //         /*<![CDATA[*/ window.zE ||
    //             (function(e, t, s) {
    //             if (window._prerender) return
    //             var n = (window.zE = window.zEmbed = function() {
    //                 n._.push(arguments)
    //                 }),
    //                 a = (n.s = e.createElement(t)),
    //                 r = e.getElementsByTagName(t)[0]
    //             ;(n.set = function(e) {
    //                 n.set._.push(e)
    //             }),
    //                 (n._ = []),
    //                 (n.set._ = []),
    //                 (a.async = true),
    //                 (a.defer = true),
    //                 a.setAttribute('charset', 'utf-8'),
    //                 (a.src = 'https://static.zdassets.com/ekr/asset_composer.js?key=' + s),
    //                 (n.t = +new Date()),
    //                 (a.type = 'text/javascript'),
    //                 r.parentNode.insertBefore(a, r)
    //             })(document, 'script', '41961ab8-f8cc-4d7a-a498-3ba3cf3de7d5') /*]]>*/
    //         }
    //     </script>
    //   `)

    // // GA4
    // html.body.push(`
    //     <script>
    //         ;(function(i, s, o, g, r, a, m) {
    //         if (window._prerender) return
    //         i['GoogleAnalyticsObject'] = r
    //         ;(i[r] =
    //             i[r] ||
    //             function() {
    //             ;(i[r].q = i[r].q || []).push(arguments)
    //             }),
    //             (i[r].l = 1 * new Date())
    //         ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
    //         a.async = 1
    //         a.src = g
    //         m.parentNode.insertBefore(a, m)
    //         })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
    //     </script>
    //   `)

    // // GTag
    // html.body.push(`
    //     <script async src="https://www.googletagmanager.com/gtag/js?id=G-64TDS9C7Z0"></script>
    //     <script>
    //         window.dataLayer = window.dataLayer || [];
    //         function gtag(){dataLayer.push(arguments);}
    //         gtag('js', new Date());
    
    //         gtag('config', 'G-64TDS9C7Z0');
    //     </script>
    //    `)

    // // twitter
    // html.body.push(`
    //     <script>
    //         !(function(e, t, n, s, u, a) {
    //         e.twq ||
    //             ((s = e.twq = function() {
    //             s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
    //             }),
    //             (s.version = '1.1'),
    //             (s.queue = []),
    //             (u = t.createElement(n)),
    //             (u.async = !0),
    //             (u.src = '//static.ads-twitter.com/uwt.js'),
    //             (a = t.getElementsByTagName(n)[0]),
    //             a.parentNode.insertBefore(u, a))
    //         })(window, document, 'script')
    //         // Insert Twitter Pixel ID and Standard Event data below
    //         twq('init', 'o4ygp')
    //         twq('track', 'PageView')
    //     </script>
    //     <script defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    //    `)

    // // bing (microsoftwrare)
    // html.body.push(`
    //     <script>
    //         ;(function(w, d, t, r, u) {
    //         var f, n, i
    //         ;(w[u] = w[u] || []),
    //             (f = function() {
    //             var o = { ti: '134604719' }
    //             ;(o.q = w[u]), (w[u] = new UET(o)), w[u].push('pageLoad')
    //             }),
    //             (n = d.createElement(t)),
    //             (n.src = r),
    //             (n.async = 1),
    //             (n.onload = n.onreadystatechange = function() {
    //             var s = this.readyState
    //             ;(s && s !== 'loaded' && s !== 'complete') || (f(), (n.onload = n.onreadystatechange = null))
    //             }),
    //             (i = d.getElementsByTagName(t)[0]),
    //             i.parentNode.insertBefore(n, i)
    //         })(window, document, 'script', '//bat.bing.com/bat.js', 'uetq')
    //     </script>
    //    `)

    // // klaviyo
    // html.body.push(`
    //     <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XNyFXA"></script>
    // `)

    // // facebook
    // html.body.push(`
    //     <script async defer crossorigin="anonymous" src="https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v14.0" nonce="qdE5LC9w"></script>
    // `)
  })
  // You can also intercept the response here.
  //   nitroApp.hooks.hook('render:response', (response, { event }) => {
  //     console.log(response)
  //   })
})
