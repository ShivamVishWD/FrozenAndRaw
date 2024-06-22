import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalSotrage = async (key: string, data: any, type: string) => {
  try {
    await AsyncStorage.setItem(key, type ? JSON.stringify(data) : data);
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  } catch (error) {
    return null;
  }
};

export const getLocalStorage = async (key: string, type: string) => {
  try {
    let data: any = await AsyncStorage.getItem(key);
    return new Promise((resolve, reject) => {
      resolve(type ? JSON.parse(data) : data);
    });
  } catch (error) {
    return null;
  }
};

export const removeLocalStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  } catch (error) {
    return null;
  }
};

export const cleanLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  } catch (error) {
    return null;
  }
};

export const LOCAL_STORAGE_KEYS = {
  USERID: 'userid',
  USERNAME: 'username',
  USERDETAIL: 'userdetail',
};
