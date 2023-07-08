const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default i18n => ({
    emailRule(value) {
        if (value) {
            return EMAIL_PATTERN.test(value) || i18n.t('rules.email')
        }
        return true
    },
    passwordRule(value) {
        if (value) {
            const pattern = /^(?=.+[A-Z])(?=.+[a-z])(?=.+\d)(?=.+[!"#$%&\\'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&\\'()*+,-./:;<=>?@[\]^_`{|}~]{8,50}$/
            return pattern.test(value) || i18n.t('rules.password')
        }
        return true
    },

    requiredRule(value, property = null) {
        if (property) {
            if (value[property]) {
                return true
            }

            return i18n.t('rules.required')
        }

        if (Array.isArray(value)) {
            if (value.length) {
                return true
            }

            return i18n.t('rules.required')
        }

        return !!value || i18n.t('rules.required')
    },
})
