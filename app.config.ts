export default {
    expo: {
        extra: {
            API_URL: 'http://192.168.1.137:5000',
            API_URL_DEPLOY: 'https://testx.space'
        },
        ios: {
            "infoPlist": {
                "NSAppTransportSecurity": {
                    "NSAllowsArbitraryLoads": true
                }
            }
        },
        "android": {
            "package": "com.dohan205.testxmobile"
        }
    }
}