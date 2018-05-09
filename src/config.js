export const apiDomain = 'http://127.0.0.1:8000/'

export const registerUrl = apiDomain + 'api/register'

export const loginUrl = apiDomain + 'oauth/token'

export const userUrl = apiDomain + 'api/user'

export const tagstoreUrl = apiDomain + 'api/tags'

export const questiosUrl = apiDomain + 'api/question'

export const getHeader = function(){
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    const headers = {
        'Accept': 'applicatin/json',
        'Authorization': 'Bearer '+ tokenData.access_token
    }
    return headers
}
