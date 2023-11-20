import UAParser from 'ua-parser-js'
import { DeviceType } from '~/constant'
export const useDeviceType = () => {
    const device = ref('')
    if(process.server) {
        const headers = useRequestHeaders()
        const ua = headers['user-agent']
        const uaRef = UAParser(ua)
        device.value = uaRef.device.type || device.value
    }else if(process.client){
        const ua = window.navigator.userAgent
        const uaRef = UAParser(ua)
        device.value = uaRef.device.type || device.value
    }
    if(device.value !== DeviceType.MOBILE && device.value !== DeviceType.TABLET) {
        device.value = DeviceType.PC
    }
    return device
}