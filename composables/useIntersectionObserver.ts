interface IIntersectionObseverOptions {
    isTestMultiTime: boolean
}

export const useIntersectionObserver = (root: Ref, cb?: Function, options?: IIntersectionObseverOptions) => {

    // set default options
    if(!options) {
        options = {
            isTestMultiTime: false
        }
    }

    const isViewed = ref(false)
    let observer: IntersectionObserver | null = null
    onMounted(() => {
        if(!root.value) {
            throw(new Error(`useIntersectionObserver: root is invalid: ${root.value}`))
        }
        const intersectionObseverOption = {
            threshold: new Array(20).fill(1).map((v, i) => (i + 1) / 20)
            // rootMargin: '300px'
        }
        observer = new IntersectionObserver((entries) => {
        if (isViewed.value && observer && !options?.isTestMultiTime) {
            observer.unobserve(root.value)
            observer.disconnect()
        }
        entries.forEach(entry => {
            if (entry.intersectionRatio < 0.5) {
                isViewed.value = false
            } else {
                isViewed.value = true
                cb && cb()
            }
        })
        }, intersectionObseverOption)
    
        observer.observe(root.value)
    })

    onBeforeUnmount(() => {
        if(!observer) return
        observer.unobserve(root.value)
        observer.disconnect()
    })

    return {
        isViewed,
        observer
    }
}