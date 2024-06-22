import NetInfo from '@react-native-community/netinfo';
import { LOCAL_STORAGE_KEYS, getLocalStorage } from './AsyncStorageHelper';

export const isInternetConnected = async() => {
    return new Promise((resolve) => {
        NetInfo.addEventListener(state => {
            resolve(state.isConnected);
        })
    })
}

export const currentGreeting = () => {
    if(new Date().getHours() < 12)
        return "Good Morning";
    else if(new Date().getHours() < 16)
        return "Good Afternoon";
    else if(new Date().getHours() < 21)
        return "Good Evening";
    else
        return "Good Night";
}

export function debounce (fn, delay = 300) {
    let timerId = null;
    return function(){
        let context = this, args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(() => fn.apply(context, args), delay);
    };
}

export const username = async() => {
    const data = await getLocalStorage(LOCAL_STORAGE_KEYS.USERNAME, '');
    return data;
}

export const userid = async() => {
    return await getLocalStorage(LOCAL_STORAGE_KEYS.USERID, '');
}

export const userdetail = async() => {
    return await getLocalStorage(LOCAL_STORAGE_KEYS.USERDETAIL, 'json');
}

// export const ImagesBaseUrl = "https://problogging.in";
export const ImagesBaseUrl = "http://13.201.232.109";
// scribblers den base url
export const apiScribblersUrl = 'https://scribblersden.com/';
// IP Base scribblers URL
export const apiScribblersIPUrl = 'http://43.204.208.156/';
// CMS Strapi Base URL
// export const apiCMSUrl = 'https://problogging.in/api/';
export const apiCMSUrl = 'http://13.201.232.109/api/';

export const API_URLs = {
    dashboardAPI: 'api/v1/app/dashboard',
    singleArticleAPI: 'api/v1/article/',
    articlesListAPI: 'api/v1/articles/',
    loginAPI: 'api/v1/login/user',
    signupAPI: 'api/v1/register/user',
    otpVerifyAPI: 'api/v1/verify/user',
    resendOtpAPI: 'api/v1/resend/otp',
    forgotPasswordAPI: 'api/v1/forgotpassword',
    changePasswordAPI: 'api/v1/change/password',
    searchBlogAPI: 'api/v1/totalarticles',
    contactUsAPI: 'api/blog/contact',
    userDetailAPI: 'api/v1/userdata',
    updateUserAPI: 'api/v1/update/user/data',
}

export const CMS_API_URLs = {
    categoryAPI: 'categories',
    articleAPI: 'articles'
}