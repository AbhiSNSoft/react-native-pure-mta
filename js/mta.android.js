
import { NativeModules } from 'react-native'

const { RNTMTA } = NativeModules

export default {

  /**
   * 启动 SDK
   *
   * @param {string} appKey
   * @param {boolean} isDebug
   */
  start(appKey, isDebug) {
    RNTMTA.start(appKey, isDebug)
  },

  addPhoneAccount(phone) {
    RNTMTA.addPhoneAccount(phone)
  },

  removePhoneAccount() {
    RNTMTA.removePhoneAccount()
  },

  addWechatAccount(openId) {
    RNTMTA.addWechatAccount(openId)
  },

  removeWechatAccount() {
    RNTMTA.removeWechatAccount()
  },

  trackCustomEvent(name, data) {
    RNTMTA.trackCustomEvent(name, data || {})
  }

}
