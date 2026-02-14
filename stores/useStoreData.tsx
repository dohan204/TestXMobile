import AsyncStorage from '@react-native-async-storage/async-storage';
export const useStoreData = async (key: string, data: any): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        console.error('Error handle save data', error)
    }
}

export const useReadData = async (key: string): Promise<string> => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null ? value : ''
    } catch (err) {
        console.error('Lỗi đọc dữ liệu: ', err);
        return '';
    }
}

export const RemoveStorage = async (key: string): Promise<void> => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error('Error handle remove: ', e);
    }
}