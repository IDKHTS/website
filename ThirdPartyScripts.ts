function inlineScript(content: string) {
    const s = document.createElement('script')
    s.innerHTML = content
    return s
}
function externalScript(url: string, otherAttrs?: any) {
    const s = document.createElement('script')
    s.src = url
    // async && s.setAttribute('async', 'true')
    // defer && s.setAttribute('defer', 'true')
    if(!otherAttrs) return s
    Object.keys(otherAttrs).forEach(key => {
        s.setAttribute(key, otherAttrs[key])
    })
    return s
}

export default () => {
  if(process.env.NODE_ENV !== 'development') {
    setTimeout(() => {
      const thirdPartySections = document.createElement('section')
      thirdPartySections.style.display = 'none'
  
      // GTM
      thirdPartySections.appendChild(inlineScript(`
        ;(function(w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : ''
        j.async = true
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
        f.parentNode.insertBefore(j, f)
        })(window, document, 'script', 'dataLayer', 'GTM-W5ZH3RF')
      `))

      // Zendesk
      thirdPartySections.appendChild(inlineScript(`
        // https://support.zendesk.com/hc/en-us/articles/229167008-Advanced-customization-of-your-Web-Widget
        // https://chat.zendesk.com/hc/en-us/articles/212017088-Hiding-the-widget-on-mobile-devices-via-API
        var ua = navigator.userAgent.toLowerCase(),
        platform = navigator.platform.toLowerCase()
        ;(platformName = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0]), (isMobile = /ios|android|webos/.test(platformName))

        if (!isMobile) {
        /*<![CDATA[*/ window.zE ||
            (function(e, t, s) {
            if (window._prerender) return
            var n = (window.zE = window.zEmbed = function() {
                n._.push(arguments)
                }),
                a = (n.s = e.createElement(t)),
                r = e.getElementsByTagName(t)[0]
            ;(n.set = function(e) {
                n.set._.push(e)
            }),
                (n._ = []),
                (n.set._ = []),
                (a.async = true),
                (a.defer = true),
                a.setAttribute('charset', 'utf-8'),
                (a.src = 'https://static.zdassets.com/ekr/asset_composer.js?key=' + s),
                (n.t = +new Date()),
                (a.type = 'text/javascript'),
                r.parentNode.insertBefore(a, r)
            })(document, 'script', '41961ab8-f8cc-4d7a-a498-3ba3cf3de7d5') /*]]>*/
        }
      `))

      // GA4
      thirdPartySections.appendChild(inlineScript(`
            ;(function(i, s, o, g, r, a, m) {
            if (window._prerender) return
            i['GoogleAnalyticsObject'] = r
            ;(i[r] =
                i[r] ||
                function() {
                ;(i[r].q = i[r].q || []).push(arguments)
                }),
                (i[r].l = 1 * new Date())
            ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
            a.async = 1
            a.src = g
            m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
        `
      ))
  
      // GTag
      thirdPartySections.appendChild(inlineScript(`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-64TDS9C7Z0');
        `
      ))
      thirdPartySections.appendChild(externalScript('https://www.googletagmanager.com/gtag/js?id=G-64TDS9C7Z0'))
  
      // twitter
      thirdPartySections.appendChild(inlineScript(`
        !(function(e, t, n, s, u, a) {
        e.twq ||
            ((s = e.twq = function() {
            s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
            }),
            (s.version = '1.1'),
            (s.queue = []),
            (u = t.createElement(n)),
            (u.async = !0),
            (u.src = '//static.ads-twitter.com/uwt.js'),
            (a = t.getElementsByTagName(n)[0]),
            a.parentNode.insertBefore(u, a))
        })(window, document, 'script')
        // Insert Twitter Pixel ID and Standard Event data below
        twq('init', 'o4ygp')
        twq('track', 'PageView')
        `
      ))
      thirdPartySections.appendChild(externalScript('https://platform.twitter.com/widgets.js',{
        defer: true,
        charset: 'utf-8'
    }))


      // bing (microsoftwrare)
      thirdPartySections.appendChild(inlineScript(`
        ;(function(w, d, t, r, u) {
        var f, n, i
        ;(w[u] = w[u] || []),
            (f = function() {
            var o = { ti: '134604719' }
            ;(o.q = w[u]), (w[u] = new UET(o)), w[u].push('pageLoad')
            }),
            (n = d.createElement(t)),
            (n.src = r),
            (n.async = 1),
            (n.onload = n.onreadystatechange = function() {
            var s = this.readyState
            ;(s && s !== 'loaded' && s !== 'complete') || (f(), (n.onload = n.onreadystatechange = null))
            }),
            (i = d.getElementsByTagName(t)[0]),
            i.parentNode.insertBefore(n, i)
        })(window, document, 'script', '//bat.bing.com/bat.js', 'uetq')`
      ))
  
      // klaviyo
      thirdPartySections.appendChild(externalScript(`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XNyFXA`, { async: true, type: 'text/javascript' }))
  
      // facebook
      thirdPartySections.appendChild(externalScript(`https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v14.0`, { async: true, defer: true, crossorigin: "anonymous", nonce: "qdE5LC9w"}))

      document.body.appendChild(thirdPartySections)
    }, 0);
  }
}